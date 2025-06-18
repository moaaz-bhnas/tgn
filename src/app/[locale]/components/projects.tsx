import { createApi } from "@/lib/api";
import { Project } from "@/lib/api/types";
import ProjectCard from "@/components/project-card";
import { Locale } from "@/types/locale";

type Props = {
  locale: Locale;
};

async function Projects({ locale }: Props) {
  const api = createApi({ language: locale });
  const response = await api.getProjects();

  const projects = response.data.data.filter((project: Project) => project.featured == "1");

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project: Project) => (
        <li key={project.id}>
          <ProjectCard project={project} locale={locale} />
        </li>
      ))}
    </ul>
  );
}

export default Projects;
