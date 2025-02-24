import Image from "next/image";
import Container from "./components/container";
import LetsTalkBusiness from "./components/lets-talk-business";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/dictionaries";
import Banner from "./components/banner";

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const {
    "home-page": { "lets-talk-business": t },
  } = await getDictionary(locale);

  return (
    <div className="space-y-4">
      <div className="bg-red-400">
        <Container>
          <LetsTalkBusiness t={t} />
        </Container>
      </div>

      <Container>
        <Banner />
      </Container>
    </div>
  );
}
