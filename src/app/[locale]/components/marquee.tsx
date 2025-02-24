import { times } from "lodash";
import { Dribbble, Drum, Slack } from "lucide-react";
import { Fragment } from "react";
import FastMarquee from "react-fast-marquee";

type Props = {};

function GrowByTg() {
  return <span className="font-bold text-white text-lg">growbytg</span>;
}

function Marquee({}: Props) {
  const iconsToRepeat = [Slack, Dribbble, Drum];
  const icons = times(20, (i) => iconsToRepeat[i % iconsToRepeat.length]);

  return (
    <FastMarquee className="bg-black py-1">
      <div className="flex items-center gap-6 pe-6">
        {icons.map((Icon, index) => (
          <Fragment key={index}>
            <GrowByTg />
            <Icon className="w-5 text-white" />
          </Fragment>
        ))}
      </div>
    </FastMarquee>
  );
}

export default Marquee;
