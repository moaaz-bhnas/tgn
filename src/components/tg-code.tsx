import Image from "next/image";
import React from "react";

type Props = {
  text: string;
};

function TgCode({ text }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Image src={"/images/icons/diamond-black.png"} alt={""} width={10} height={10} />
      {`{${text}}`}
      <Image src={"/images/icons/diamond-black.png"} alt={""} width={10} height={10} />
    </div>
  );
}

export default TgCode;
