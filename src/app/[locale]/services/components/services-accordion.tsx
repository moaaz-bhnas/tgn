import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AccordionArticle from "@/components/accordion-article";

type Props = { t: T };

function ServicesAccordion({ t }: Props) {
  const data = [
    {
      title: t.business_development,
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
      title: t.marketing,
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
      title: t.branding,
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
      {data.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.articles.map((article) => (
              <AccordionArticle key={article.title} article={article} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ServicesAccordion;
