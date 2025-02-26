import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "@/types/i18n";
import { Separator } from "@radix-ui/react-separator";

type Props = { t: T };

function AccordionArticle({ article }: { article: { title: string; content: string } }) {
  return (
    <article className="grid grid-cols-4 p-4">
      <h3 className="text-xl uppercase">{article.title}</h3>
      <Separator className="w-24 h-1 bg-gray-800 mt-3" />
      <p className="col-span-2">{article.content}</p>
    </article>
  );
}

function TgAccordion({ t }: Props) {
  const data = [
    {
      title: t.our_future,
      articles: [
        {
          title: t.here_to_help,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.who_we_are,
      articles: [
        {
          title: t.visinon,
          content: t.lorem_ipsum,
        },
        {
          title: t.mission,
          content: t.lorem_ipsum,
        },
        {
          title: t.objectives,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.our_standards,
      articles: [
        {
          title: t.criteria,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.expertise,
      articles: [
        {
          title: t.industry,
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

export default TgAccordion;
