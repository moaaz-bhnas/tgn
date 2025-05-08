import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import CaseStudyArticle from "./components/case-study-article";
import { createApi } from "@/lib/api";
import { notFound } from "next/navigation";
import JsonViewer from "@/components/json-viewer";
import { normalizeProjectImages } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const { "case-study-page": t } = await getDictionary(locale);

  const api = createApi({ language: locale });
  const response = await api.getProjectBySlug(slug);

  if (!response.data) {
    notFound();
  }

  const images = normalizeProjectImages(response.data.images);

  return (
    <div className="bg-tggrey">
      <CaseStudyArticle t={t["case-study"]} project={response.data.project} images={images} />
    </div>
  );
}

export default CaseStudyPage;
