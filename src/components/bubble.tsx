import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  arrowPosition: "right" | "down";
  isRotated?: boolean;
};

function Bubble({ children, arrowPosition, isRotated = false }: Props) {
  return (
    <div className={cn("inline-flex items-center", arrowPosition == "right" ? "flex-row gap-4" : "flex-col")}>
      {/* Content */}
      <div
        className={cn(
          "bg-white border-2 border-gray-800 rounded-[100%] gap-4 relative z-10",
          isRotated ? "-rotate-12" : ""
        )}
      >
        {children}
      </div>

      {/* Arrow */}
      {arrowPosition == "right" && (
        <Image className="w-10 rtl:-rotate-180" src="/images/icons/left-arrow-black.svg" alt="" width={0} height={0} />
      )}

      {arrowPosition == "down" && (
        <Image className="w-10 -mt-1" src="/images/icons/down-arrow-black.svg" alt="" width={0} height={0} />
      )}
    </div>
  );
}

export default Bubble;
