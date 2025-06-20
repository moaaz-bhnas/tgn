"use client";

import { cn } from "@/lib/utils";
import { T } from "@/types/i18n";
import { TypeAnimation } from "react-type-animation";
import { useParams } from "next/navigation";

type Props = {
  t: T;
};

function LetsTalkBusiness({ t }: Props) {
  const { locale } = useParams();

  return (
    <div
      className={cn(
        "flex justify-center items-center gap-1.5 font-extrabold uppercase text-center",
        locale === "ar"
          ? "text-[6vw] sm:text-[2.6rem] lg:text-[4.2rem] xl:text-[6.75vw]"
          : "text-[7vw] sm:text-[3.25rem] lg:text-[4.75rem] xl:text-[7.75vw]"
      )}
    >
      <p>{"{"}</p>
      <TypeAnimation className={cn("text-nowrap")} sequence={[t.headline]} wrapper="p" speed={50} cursor={false} />
      <p>{"}"}</p>
    </div>
  );
}

export default LetsTalkBusiness;
