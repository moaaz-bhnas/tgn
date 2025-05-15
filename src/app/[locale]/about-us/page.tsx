import { Locale } from "@/types/locale";
import Container from "../../../components/container";
import { getDictionary } from "@/lib/dictionaries";
import LetsTalkBusiness from "../components/lets-talk-business";
import AboutUsAccordion from "./components/about-us-accordion";

export const revalidate = 30;

async function AboutUsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "about-us-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <AboutUsAccordion t={t.accordion} locale={locale} />
      </Container>
    </div>
  );
}

export default AboutUsPage;
