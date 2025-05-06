import Image from "next/image";
import { createApi } from "@/lib/api";
import { getFullPath } from "@/lib/utils";
import { Project } from "@/lib/api/types";

type Props = {
  locale: string;
};

async function Projects({ locale }: Props) {
  const api = createApi({ language: locale });
  const response = await api.getProjects();

  const projects = response.data.data;

  console.log("response 🤷🏻‍♂️🤷🏻‍♂️", projects[0]);

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {projects.map((project: Project) => (
        <Image
          className="w-full h-auto"
          key={project.id}
          src={getFullPath(project.thumbnail?.path) || "/images/projects/project-1.png"}
          alt={project.thumbnail?.title || project.title}
          width={0}
          height={0}
          sizes="50vw"
        />
      ))}
    </ul>
  );
}

export default Projects;
