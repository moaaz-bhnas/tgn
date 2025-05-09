import Image from "next/image";
import Link from "next/link";
import { getFullPath } from "@/lib/utils";
import { Project } from "@/lib/api/types";
import { Locale } from "@/types/locale";

type Props = {
  project: Project;
  locale: Locale;
};

function ProjectCard({ project, locale }: Props) {
  return (
    <Link href={`/${locale}/case-study/${project.slug}`} className="group">
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={getFullPath(project.thumbnail?.path) || "/images/projects/project-1.png"}
          alt={project.thumbnail?.title || project.title}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Desktop: Gradient overlay that fades on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300" />
        {/* Desktop: Full overlay on hover */}
        <div className="absolute inset-0 bg-black/80 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
          <div
            className="text-sm text-white/90 leading-relaxed hidden lg:block"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
        {/* Mobile: Always visible content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <div
            className="text-sm text-white/90 line-clamp-2 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
