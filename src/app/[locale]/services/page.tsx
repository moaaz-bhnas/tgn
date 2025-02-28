import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../components/lets-talk-business";
import ServicesAccordion from "./components/services-accordion";

type Props = {};

async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "services-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ServicesAccordion t={t.accordion} />
      </Container>
    </div>
  );
}

export default ServicesPage;
