import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AccordionArticle from "@/components/accordion-article";
import BrandingArticle from "./branding-article";
import { Locale } from "@/types/locale";

type Props = { t: T; locale: Locale };

function ExpertiseAccordion({ t, locale }: Props) {
  const data = [
    // {
    //   title: t.branding,
    //   articles: [
    //     {
    //       title: t.brand_strategy,
    //       content: t.lorem_ipsum,
    //     },
    //     {
    //       title: t.brand_strategy,
    //       content: t.lorem_ipsum,
    //     },
    //     {
    //       title: t.brand_strategy,
    //       content: t.lorem_ipsum,
    //     },
    //   ],
    // },
    {
      title: t.media_production,
      articles: [
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.socia_media,
      articles: [
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.website_solutions,
      articles: [
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
        {
          title: t.brand_strategy,
          content: t.lorem_ipsum,
        },
      ],
    },
  ];

  return (
    <Accordion className="divide-y divide-gray-800" type="single" collapsible>
      <AccordionItem value={t.branding}>
        <AccordionTrigger className="text-2xl uppercase hover:no-underline">{t.branding}</AccordionTrigger>
        <AccordionContent>
          <BrandingArticle t={t} locale={locale} />
        </AccordionContent>
      </AccordionItem>
      {data.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.articles.map((article, index) => (
              <AccordionArticle key={index} article={article} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ExpertiseAccordion;
