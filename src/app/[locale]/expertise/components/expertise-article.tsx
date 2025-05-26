import { T } from "@/types/i18n";
import { Locale } from "@/types/locale";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/api/types";
import { getFullPath } from "@/lib/utils";

type Props = { t: T; locale: Locale; project: Project };

function ExpertiseArticle({ t, locale, project }: Props) {
  function renderCaseStudyCard() {
    return (
      <div className="p-8 bg-tgpurple flex flex-col justify-center items-center text-center aspect-[5/4]">
        <div className="my-auto font-bold text-lg lg:text-xl uppercase">
          <span>+</span>
          <div>
            {`${project.title}`}
            <br />
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>

        <Link className="underline" href={`/${locale}/case-study/${project.slug}`}>
          {t.see_case_study}
        </Link>
      </div>
    );
  }

  return (
    <div className="relative group">
      <Image
        className="w-full aspect-[5/4] object-cover"
        src={getFullPath(project.thumbnail?.path || "")}
        alt={project.title}
        sizes="50vw"
        width={0}
        height={0}
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {renderCaseStudyCard()}
      </div>
    </div>
  );
}

export default ExpertiseArticle;
