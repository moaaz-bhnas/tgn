import Image from "next/image";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div>
      <Image className="w-20 h-auto" src="/images/logos/tgn-black.png" alt="TGN" width={0} height={0} sizes="10rem" />
    </div>
  );
}

export default Logo;
