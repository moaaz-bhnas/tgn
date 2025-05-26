import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Locale } from "@/types/locale";
import { createApi } from "@/lib/api";
import ExpertiseArticle from "./expertise-article";
import { groupBy } from "lodash";

type Props = { t: T; locale: Locale };

async function ExpertiseAccordion({ t, locale }: Props) {
  const api = createApi({ language: locale });
  const response = await api.getProjects();
  const projects = response.data.data;

  // Group projects by category using Lodash
  const groupedProjects = groupBy(projects, (project) => project.category.id);

  return (
    <Accordion type="single" collapsible className="divide-y divide-gray-800">
      {Object.entries(groupedProjects).map(([categoryId, projects]) => (
        <AccordionItem key={categoryId} value={categoryId}>
          <AccordionTrigger
            className="text-2xl uppercase 
            hover:no-underline"
          >
            {projects[0].category.name}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {projects.map((project) => (
                <ExpertiseArticle key={project.id} t={t} locale={locale} project={project} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ExpertiseAccordion;
