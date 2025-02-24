import { T } from "@/types/i18n";
import { times } from "lodash";
import { Dribbble, Drum, Slack } from "lucide-react";
import { Fragment } from "react";
import FastMarquee from "react-fast-marquee";

type Props = { direction?: "left" | "right"; t: T };

function Marquee({ t, direction = "left" }: Props) {
  const iconsToRepeat = [Slack, Dribbble, Drum];
  const icons = times(20, (i) => iconsToRepeat[i % iconsToRepeat.length]);

  function renderText() {
    return <span className="font-bold text-white text-base uppercase">{t.text_element}</span>;
  }

  return (
    <div dir="ltr">
      <FastMarquee className="bg-black py-1" direction={direction}>
        <div className="flex items-center gap-6 pe-6">
          {icons.map((Icon, index) => (
            <Fragment key={index}>
              {renderText()}
              <Icon className="w-5 text-white" />
            </Fragment>
          ))}
        </div>
      </FastMarquee>
    </div>
  );
}

export default Marquee;
