import { T } from "@/types/i18n";
import { Locale } from "@/types/locale";
import Image from "next/image";
import Link from "next/link";
import { createApi } from "@/lib/api";
import { normalizeProjectImages } from "@/lib/utils";
import { getFullPath } from "@/lib/utils";

type Props = { t: T; locale: Locale; projectSlug: string };

async function ExpertiseArticle({ t, locale, projectSlug }: Props) {
  const api = createApi({ language: locale });
  const {
    data: { images, project },
  } = await api.getProjectBySlug(projectSlug);

  const normalizedImages = normalizeProjectImages(images);

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

        <Link className="underline" href={`/${locale}/case-study/${projectSlug}`}>
          {t.see_case_study}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {/* <div className="sm:order-1">{renderCaseStudyCard()}</div> */}
      {normalizedImages.map((image) => (
        <div key={image.id} className="relative group">
          <Image
            className="w-full aspect-[5/4] object-cover sm:order-0"
            src={getFullPath(image.path)}
            alt={image.title || ""}
            sizes="50vw"
            width={0}
            height={0}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {renderCaseStudyCard()}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpertiseArticle;
