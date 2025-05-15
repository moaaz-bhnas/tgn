import Container from "@/components/container";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import LetsTalkBusiness from "../components/lets-talk-business";
import ContactUsForm from "./components/contact-us-form";

export const revalidate = 30;

type Props = {};

async function ContactUsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const { "contact-us-page": t } = await getDictionary(locale);

  return (
    <div className="bg-tggrey">
      <Container>
        <LetsTalkBusiness t={t["lets-talk-business"]} />
      </Container>

      <Container>
        <ContactUsForm t={t["contact-us-form"]} locale={locale} />
      </Container>
    </div>
  );
}

export default ContactUsPage;
