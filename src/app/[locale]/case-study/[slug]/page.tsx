import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import CaseStudyArticle from "./components/case-study-article";
import { createApi } from "@/lib/api";
import { notFound } from "next/navigation";
import JsonViewer from "@/components/json-viewer";

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

  return (
    <div className="bg-tggrey">
      <JsonViewer data={response.data} initialExpanded={false} />

      <CaseStudyArticle t={t["case-study"]} project={response.data} />
    </div>
  );
}

export default CaseStudyPage;
