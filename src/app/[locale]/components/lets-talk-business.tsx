"use client";

import { cn } from "@/lib/utils";
import { T } from "@/types/i18n";
import { TypeAnimation } from "react-type-animation";

type Props = {
  t: T;
};

function LetsTalkBusiness({ t }: Props) {
  const fontStyles = "text-[5.4rem] font-extrabold uppercase text-center";

  return (
    <div className="flex justify-center items-center gap-1.5">
      <p className={fontStyles}>{"{"}</p>
      <TypeAnimation className={cn(fontStyles, "text-nowrap")} sequence={[t.headline]} wrapper="span" speed={50} />
      <p className={fontStyles}>{"}"}</p>
    </div>
  );
}

export default LetsTalkBusiness;
