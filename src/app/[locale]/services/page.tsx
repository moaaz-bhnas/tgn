import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../components/lets-talk-business";
import ServicesAccordion from "./components/services-accordion";
import { createApi } from "@/lib/api";

type Props = {};

export const revalidate = 30;

async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "services-page": t } = await getDictionary(locale);

  // Initialize API client and endpoints
  const api = createApi({ language: locale });

  // Fetch categories
  const response = await api.getCategories({ type: "Service" });

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ServicesAccordion t={t.accordion} categories={response.data.categories} />
      </Container>
    </div>
  );
}

export default ServicesPage;
