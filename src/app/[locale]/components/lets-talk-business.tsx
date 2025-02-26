"use client";

import { cn } from "@/lib/utils";
import { T } from "@/types/i18n";
import { TypeAnimation } from "react-type-animation";

type Props = {
  t: T;
};

function LetsTalkBusiness({ t }: Props) {
  return (
    <div className="flex justify-center items-center gap-1.5 text-[7vw] sm:text-[3.25rem] lg:text-[4.75rem] xl:text-[5.5rem] font-extrabold uppercase text-center">
      <p>{"{"}</p>
      <TypeAnimation className={cn("text-nowrap")} sequence={[t.headline]} wrapper="p" speed={50} />
      <p>{"}"}</p>
    </div>
  );
}

export default LetsTalkBusiness;
