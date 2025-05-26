import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import CaseStudyArticle from "./components/case-study-article";
import { createApi } from "@/lib/api";
import { notFound } from "next/navigation";
import { normalizeProjectImages } from "@/lib/utils";
import JsonViewer from "@/components/json-viewer";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  const api = createApi({ language: Locale.en }); // Default language for static generation

  // Fetch all projects and works
  const projectsResponse = await api.getProjects();

  // Get all slugs from both projects and works
  const projectSlugs = projectsResponse.data.data.map((project) => project.slug);

  // Combine and deduplicate slugs
  const allSlugs = [...new Set(projectSlugs)];

  // Generate params for each locale and slug combination
  const locales = [Locale.en, Locale.ar];
  const params = [];

  for (const locale of locales) {
    for (const slug of allSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export const revalidate = 60;

async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const { "case-study-page": t } = await getDictionary(locale);

  const api = createApi({ language: locale });

  const response = await api.getProjectBySlug(slug);

  if (!response.data) {
    notFound();
  }

  const images = normalizeProjectImages(response.data.images);
  const project = response.data.project;

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-tggrey">
      {/* <JsonViewer data={response.data} /> */}
      <CaseStudyArticle t={t["case-study"]} project={project} images={images} />
    </div>
  );
}

export default CaseStudyPage;
