import { T } from "@/types/i18n";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Locale } from "@/types/locale";
import { createApi } from "@/lib/api";
import ExpertiseArticle from "./expertise-article";

type Props = { t: T; locale: Locale };

async function ExpertiseAccordion({ t, locale }: Props) {
  const api = createApi({ language: locale });
  const response = await api.getProjects();
  const projects = response.data.data;

  return (
    <Accordion className="divide-y divide-gray-800" type="single" collapsible>
      {projects.map((project) => (
        <AccordionItem key={project.title} value={project.title}>
          <AccordionTrigger className="text-2xl uppercase hover:no-underline">{project.title}</AccordionTrigger>
          <AccordionContent>
            <ExpertiseArticle t={t} locale={locale} projectSlug={project.slug} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default ExpertiseAccordion;
