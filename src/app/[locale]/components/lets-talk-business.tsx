"use client";

import { Locale } from "@/types/locale";
import { TypeAnimation } from "react-type-animation";

type Props = {
  locale: Locale;
};

function LetsTalkBusiness({ locale }: Props) {
  // return <div className="text-7xl font-extrabold uppercase text-center">{"{Let's talk business}"}</div>;
  return (
    <div className="flex justify-center">
      <TypeAnimation
        className="text-[4.45rem] font-extrabold uppercase text-center"
        sequence={[]}
        wrapper="span"
        speed={30}
        // style={{ fontSize: "2em", display: "inline-block" }}
      />
    </div>
  );
}

export default LetsTalkBusiness;
