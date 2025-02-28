import Bubble from "@/components/bubble";
import { T } from "@/types/i18n";
import Image from "next/image";
import React from "react";

type Props = { t: T };

function BeWithUs({ t }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-center font-medium text-lg sm:text-2xl md:text-3xl ">
        {t.be_with_us}
        <br />
        {t.increase_your_experience}
      </p>

      <div className="flex flex-col items-center gap-2">
        <p className="text-muted-foreground">{t.we_are_looking}</p>

        <Bubble arrowPosition="down" isRotated>
          <div className="py-3 px-4 flex items-center gap-1 font-semibold">
            <Image src="/images/icons/diamond-black.png" alt="" width={10} height={10} />
            {t.for_you}
            <Image src="/images/icons/diamond-black.png" alt="" width={10} height={10} />
          </div>
        </Bubble>
      </div>
    </div>
  );
}

export default BeWithUs;
