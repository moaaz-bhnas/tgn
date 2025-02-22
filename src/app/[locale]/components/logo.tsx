import { Fan } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div>
      <Fan className="h-6 w-6" />
      <div className="sr-only">TGN</div>
    </div>
  );
}

export default Logo;
