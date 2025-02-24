"use client";

import { T } from "@/types/i18n";
import { TypeAnimation } from "react-type-animation";

type Props = {
  t: T;
};

function LetsTalkBusiness({ t }: Props) {
  return (
    <div className="flex justify-center">
      <TypeAnimation
        className="text-[4.45rem] font-extrabold uppercase text-center"
        sequence={[t.headline]}
        wrapper="span"
        speed={30}
      />
    </div>
  );
}

export default LetsTalkBusiness;
