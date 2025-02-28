import Container from "@/components/container";
import { Locale } from "@/types/locale";
import React from "react";
import LetsTalkBusiness from "../components/lets-talk-business";
import { getDictionary } from "@/lib/dictionaries";
import { T } from "@/types/i18n";
import ApplyForm from "./components/apply-form";

type Props = {};

async function ApplyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "apply-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ApplyForm t={t["apply-form"]} />
      </Container>
    </div>
  );
}

export default ApplyPage;
