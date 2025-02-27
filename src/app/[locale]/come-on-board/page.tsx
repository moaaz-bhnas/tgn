import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../components/lets-talk-business";
import ComeOnBoardAccordion from "./components/come-on-board-accordion";
import BeWithUs from "./components/be-with-us";

async function ComeOnBoardPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "come-on-board-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <BeWithUs t={t["be-with-us"]} />
      </Container>

      <Container>
        <ComeOnBoardAccordion t={t.accordion} locale={locale} />
      </Container>
    </div>
  );
}

export default ComeOnBoardPage;
