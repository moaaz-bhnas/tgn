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
    data: { images, work },
  } = await api.getWorkBySlug(projectSlug);

  const normalizedImages = normalizeProjectImages(images);
  const hasMultipleImages = normalizedImages.length > 1;

  function renderCaseStudyCard() {
    return (
      <div className="p-8 bg-tgpurple flex flex-col justify-center items-center text-center aspect-[5/4]">
        <div className="my-auto font-bold text-lg lg:text-xl uppercase">
          <span>+</span>
          <p>
            {`{${t.case_study}}`}
            <br />
            {t.brand_identity}
          </p>
        </div>

        <Link className="underline" href={`/${locale}/case-study/${projectSlug}`}>
          {t.see_case_study}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div className="sm:order-1">{renderCaseStudyCard()}</div>

      {normalizedImages.length > 0 && (
        <Image
          className="w-full aspect-[5/4] object-cover sm:order-0"
          src={getFullPath(normalizedImages[0].path)}
          alt={normalizedImages[0].title || ""}
          sizes="50vw"
          width={0}
          height={0}
        />
      )}

      {hasMultipleImages && (
        <Image
          className="w-full sm:col-span-2 aspect-[5/4] sm:aspect-[10/4] object-cover sm:order-2"
          src={getFullPath(normalizedImages[1].path)}
          alt={normalizedImages[1].title || ""}
          sizes="100vw"
          width={0}
          height={0}
        />
      )}
    </div>
  );
}

export default ExpertiseArticle;
