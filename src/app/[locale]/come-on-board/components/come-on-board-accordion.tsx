import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AccordionArticle from "@/components/accordion-article";
import Bubble from "@/components/bubble";
import Image from "next/image";

type Props = { t: T };

function ComeOnBoardAccordion({ t }: Props) {
  const data = [
    {
      title: t.art,
      articles: [
        {
          title: t.graphic_designer,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.pr_team,
      articles: [
        {
          title: t.graphic_designer,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.branding,
      articles: [
        {
          title: t.graphic_designer,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.media_production,
      articles: [
        {
          title: t.graphic_designer,
          content: t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.intership,
      articles: [
        {
          title: t.graphic_designer,
          content: t.lorem_ipsum,
        },
      ],
    },
  ];

  function renderApplyButton() {
    return (
      <Bubble arrowPosition="right">
        <button className="py-3 px-4 flex items-center gap-1 font-semibold" type="button">
          <Image src={"/images/icons/diamond-black.png"} alt="" width={10} height={10} />
          {t.apply_now}
          <Image src={"/images/icons/diamond-black.png"} alt="" width={10} height={10} />
        </button>
      </Bubble>
    );
  }

  return (
    <Accordion className="divide-y divide-gray-800" type="single" collapsible>
      {data.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{item.title}</AccordionTrigger>
          <AccordionContent>
            {item.articles.map((article) => (
              <AccordionArticle key={article.title} article={article} callToAction={renderApplyButton()} />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ComeOnBoardAccordion;
