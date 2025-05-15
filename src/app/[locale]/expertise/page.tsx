import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../components/lets-talk-business";
import ExpertiseAccordion from "./components/expertise-accordion";

export const revalidate = 60;

async function ExpertisePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "expertise-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ExpertiseAccordion t={t.accordion} locale={locale} />
      </Container>
    </div>
  );
}

export default ExpertisePage;
