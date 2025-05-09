import AccordionArticle from "@/components/accordion-article";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "@/types/i18n";
import Image from "next/image";
import { createApi } from "@/lib/api";
import { Locale } from "@/types/locale";
import { Team } from "@/lib/api/types";
import { getFullPath } from "@/lib/utils";
type Props = {
  t: T;
  locale: Locale;
};

function TeamSection({ title, team }: { title: string; team: Team[] }) {
  console.log(
    "⁉️",
    team.map((member) => getFullPath(member.image))
  );

  return (
    <div className="space-y-4 text-end">
      {/* Board */}
      <div className="space-y-4">
        <h3 className="text-6xl font-extrabold ltr:tracking-tighter italic uppercase me-2">{title}</h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {team.map((member) => (
            <li key={member.name} className="space-y-2">
              <div>
                <h4 className="uppercase font-medium truncate whitespace-nowrap">{member.name}</h4>
                <p className="text-muted-foreground text-sm text-nowrap">{member.job_title}</p>
              </div>
              <Image
                className="w-full border-[1.5px] border-gray-800 aspect-[4/5] object-cover"
                src={getFullPath(member.image) || "/images/avatar/default.png"}
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

async function AboutUsAccordion({ t, locale }: Props) {
  const api = createApi({ language: locale });
  const settings = await api.getSettings();
  const teamsResponse = await api.getTeams();

  const { who_we_are, our_future } = settings.message;

  const data = [
    {
      title: t.our_future,
      articles: [
        {
          title: t.here_to_help,
          content: our_future.here_to_help_content || t.lorem_ipsum,
        },
      ],
    },
    {
      title: t.who_we_are,
      articles: [
        {
          title: t.visinon,
          content: who_we_are.vision_content || t.lorem_ipsum,
        },
        {
          title: t.mission,
          content: who_we_are.mission_content || t.lorem_ipsum,
        },
        {
          title: t.objectives,
          content: who_we_are.objectives_content || t.lorem_ipsum,
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
  ];

  const boardMembers = teamsResponse.data.teams.filter((member) => member.type === "Board");
  const teamMembers = teamsResponse.data.teams.filter((member) => member.type === "Team");

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
          <TeamSection title={t.board} team={boardMembers} />
          <TeamSection title={t.team} team={teamMembers} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default AboutUsAccordion;
