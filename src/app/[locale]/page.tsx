import Container from "../../components/container";
import LetsTalkBusiness from "./components/lets-talk-business";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/dictionaries";
import Banner from "./components/banner";
import Marquee from "./components/marquee";
import Projects from "./components/projects";
import isRtl from "@/lib/is-rtl";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "home-page": t } = await getDictionary(locale);

  return (
    <div className="space-y-4">
      <div className="bg-tgred">
        <Container>
          <LetsTalkBusiness t={t["lets-talk-business"]} />
        </Container>
      </div>

      <Container>
        <Banner locale={locale} />
      </Container>

      <Marquee t={t["marquee"]} direction={isRtl(locale) ? "right" : "left"} />

      <Container>
        <Projects locale={locale} />
      </Container>

      <Marquee t={t["marquee"]} direction={isRtl(locale) ? "right" : "left"} />
    </div>
  );
}
