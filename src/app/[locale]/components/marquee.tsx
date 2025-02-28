import { T } from "@/types/i18n";
import { times } from "lodash";
import { Dribbble, Drum, Slack } from "lucide-react";
import Image from "next/image";
import { Fragment } from "react";
import FastMarquee from "react-fast-marquee";

type Props = { direction?: "left" | "right"; t: T };

function Marquee({ t, direction = "left" }: Props) {
  const imagesToRepeat = ["/images/art/marquee-1.png", "/images/art/marquee-2.png", "/images/art/marquee-3.png"];
  const images = times(20, (i) => imagesToRepeat[i % imagesToRepeat.length]);

  function renderText() {
    return <span className="font-bold text-white text-base uppercase">{t.text_element}</span>;
  }

  return (
    <div dir="ltr">
      <FastMarquee className="bg-black py-1.5" direction={direction}>
        <div className="flex items-center gap-6 pe-6">
          {images.map((src, index) => (
            <Fragment key={index}>
              {renderText()}
              <Image className="w-4" src={src} alt="" width={0} height={0} sizes="2rem" />
            </Fragment>
          ))}
        </div>
      </FastMarquee>
    </div>
  );
}

export default Marquee;
