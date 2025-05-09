import Container from "@/components/container";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../../components/lets-talk-business";
import { getDictionary } from "@/lib/dictionaries";
import { T } from "@/types/i18n";
import ApplyForm from "./components/apply-form";
import { createApi } from "@/lib/api";
import { notFound } from "next/navigation";
import JsonViewer from "@/components/json-viewer";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

async function ApplyPage({ params }: Props) {
  const { locale, slug } = await params;
  const { "apply-page": t } = await getDictionary(locale);
  const api = createApi({ language: locale });
  const career = await api.getCareerBySlug(slug);

  if (!career) {
    return notFound();
  }

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ApplyForm t={t["apply-form"]} career={career.data.career} />
      </Container>
    </div>
  );
}

export default ApplyPage;
