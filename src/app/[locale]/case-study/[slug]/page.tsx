import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import CaseStudyArticle from "./components/case-study-article";
import { createApi } from "@/lib/api";
import { notFound } from "next/navigation";
import { normalizeProjectImages } from "@/lib/utils";
import { Project } from "@/lib/api/types";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

type ProjectResponse = {
  project: Project;
  images: any;
};

type WorkResponse = {
  work: Project;
  images: any;
};

function isProjectResponse(data: any): data is ProjectResponse {
  return "project" in data;
}

function isWorkResponse(data: any): data is WorkResponse {
  return "work" in data;
}

export async function generateStaticParams() {
  const api = createApi({ language: Locale.en }); // Default language for static generation

  // Fetch all projects and works
  const [projectsResponse, worksResponse] = await Promise.all([api.getProjects(), api.getWorks()]);

  // Get all slugs from both projects and works
  const projectSlugs = projectsResponse.data.data.map((project) => project.slug);
  const workSlugs = worksResponse.data.data.map((work) => work.slug);

  // Combine and deduplicate slugs
  const allSlugs = [...new Set([...projectSlugs, ...workSlugs])];

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

export const revalidate = 30;

async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const { "case-study-page": t } = await getDictionary(locale);

  const api = createApi({ language: locale });

  const response = await (async function getResponse() {
    try {
      const projectResponse = await api.getProjectBySlug(slug);
      return projectResponse;
    } catch (error) {
      console.log("Project not found, trying work...");
    }

    try {
      const workResponse = await api.getWorkBySlug(slug);
      return workResponse;
    } catch (error) {
      console.log("Work not found");
      throw error;
    }
  })();

  if (!response.data) {
    notFound();
  }

  const images = normalizeProjectImages(response.data.images);
  const project = isProjectResponse(response.data)
    ? response.data.project
    : isWorkResponse(response.data)
      ? response.data.work
      : null;

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-tggrey">
      <CaseStudyArticle t={t["case-study"]} project={project} images={images} />
    </div>
  );
}

export default CaseStudyPage;
