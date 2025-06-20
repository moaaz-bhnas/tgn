import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AccordionArticle from "@/components/accordion-article";
import Bubble from "@/components/bubble";
import Image from "next/image";
import Link from "next/link";
import { Locale } from "@/types/locale";
import { createApi } from "@/lib/api";
import { Career } from "@/lib/api/types";

type Props = { t: T; locale: Locale };

async function ComeOnBoardAccordion({ t, locale }: Props) {
  const api = createApi({ language: locale });
  const careersResponse = await api.getCareers();

  function renderApplyButton(career: Career) {
    return (
      <Bubble arrowPosition="right">
        <Link
          href={`/${locale}/apply/${career.slug}`}
          className="py-3 px-4 flex items-center gap-1 font-semibold"
          type="button"
        >
          <Image src={"/images/icons/diamond-black.png"} alt="" width={10} height={10} />
          {t.apply_now}
          <Image src={"/images/icons/diamond-black.png"} alt="" width={10} height={10} />
        </Link>
      </Bubble>
    );
  }

  return (
    <Accordion className="divide-y divide-gray-800" type="single" collapsible>
      {careersResponse.data.data.map((career) => (
        <AccordionItem key={career.title} value={career.title}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{career.title}</AccordionTrigger>
          <AccordionContent>
            <AccordionArticle
              key={career.title}
              article={{ title: career.title, content: career.description || t.lorem_ipsum }}
              callToAction={renderApplyButton(career)}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ComeOnBoardAccordion;
