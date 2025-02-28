import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      imageUrl: "/images/projects/project-1.png",
    },
    {
      imageUrl: "/images/projects/project-2.png",
    },
    {
      imageUrl: "/images/projects/project-3.png",
    },
  ];

  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {projects.map((project) => (
        <Image
          className="w-full h-auto"
          key={project.imageUrl}
          src={project.imageUrl}
          alt={""}
          width={0}
          height={0}
          sizes="50vw"
        />
      ))}
    </ul>
  );
}

export default Projects;
