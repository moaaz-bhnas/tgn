import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import LetsTalkBusiness from "../components/lets-talk-business";
import CaseStudyArticle from "./components/case-study-article";

type Props = {};

async function CaseStudyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "case-study-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <CaseStudyArticle t={t["case-study"]} />
    </div>
  );
}

export default CaseStudyPage;
