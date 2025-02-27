import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "@/types/i18n";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";

type Member = {
  name: string;
  position: string;
  avatar: string;
};

type Props = { t: T };

function AccordionArticle({ article }: { article: { title: string; content: string } }) {
  return (
    <article className="grid gap-1 sm:grid-cols-4 py-2 sm:p-4">
      <h3 className="text-xl uppercase">{article.title}</h3>
      <Separator className="hidden sm:block w-24 h-1 bg-gray-800 mt-3" />
      <p className="col-span-2">{article.content}</p>
    </article>
  );
}

function TeamSection({ title, team }: { title: string; team: Member[] }) {
  return (
    <div className="space-y-4 text-end">
      {/* Board */}
      <div className="space-y-4">
        <h3 className="text-6xl font-extrabold ltr:tracking-tighter italic uppercase me-2">{title}</h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((member) => (
            <li key={member.name} className="space-y-2">
              <div>
                <h4 className="uppercase font-medium">{member.name}</h4>
                <p className="text-muted-foreground text-sm text-nowrap">{member.position}</p>
              </div>
              <Image
                className="w-full border-[1.5px] border-gray-800 aspect-[4/5] object-cover"
                src={member.avatar}
                alt={member.name}
                width={0}
                height={0}
                sizes="10rem"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
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

  const members = [
    {
      name: "Oliver Kensington",
      position: "CEO",
      avatar: "/images/placeholder.jpg",
    },
    {
      name: "Sophia Langford",
      position: "CTO",
      avatar: "/images/placeholder.jpg",
    },
    {
      name: "Benjamin Caldwell",
      position: "CFO",
      avatar: "/images/placeholder.jpg",
    },
    {
      name: "Amelia Whitmore",
      position: "Strategic Designer",
      avatar: "/images/placeholder.jpg",
    },
    {
      name: "Nathaniel Prescott",
      position: "COO",
      avatar: "/images/placeholder.jpg",
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

      {/* Our team */}
      <AccordionItem value="team">
        <AccordionTrigger className="text-2xl uppercase hover:no-underline">{t.meet_the_team}</AccordionTrigger>
        <AccordionContent className="space-y-8">
          <TeamSection title={t.board} team={members} />
          <TeamSection title={t.team} team={members} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default TgAccordion;
