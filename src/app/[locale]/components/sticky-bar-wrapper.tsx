"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import StickyBar from "./sticky-bar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function StickyBarWrapper({ children }: Props) {
  const [{ y }] = useWindowScroll();
  const pathname = usePathname();
  const isHomePage = pathname.split("/").filter(Boolean).length === 1;

  return (
    <StickyBar
      isStickyTop
      containerClassName={isHomePage ? "bg-tgred" : "bg-tggrey"}
      className={cn(
        "transition",
        isHomePage ? "bg-tgred" : "bg-tggrey",
        y && y > 0 ? "backdrop-blur shadow-sm" : "",
        y && y > 0 ? (isHomePage ? "bg-tgred/90" : "bg-tggrey/90") : ""
      )}
    >
      {children}
    </StickyBar>
  );
}
