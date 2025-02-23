import Container from "./container";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import consts from "@/lib/consts";

type Props = {
  isStickyTop: boolean;
  children: ReactNode;
  heightInRems?: number;
  className?: string;
};

function StickyBar({ isStickyTop, children, heightInRems = consts.STICKY_BAR_HEIGHT_IN_REMS, className = "" }: Props) {
  return (
    <div
      style={{
        ...(isStickyTop && { paddingTop: heightInRems + "rem" }),
        ...(!isStickyTop && { paddingBottom: heightInRems + "rem" }),
      }}
    >
      <div
        className={cn(
          "fixed left-0 right-0 bg-white/90 backdrop-blur z-10",
          isStickyTop ? "top-0" : "bottom-0",
          className
        )}
        style={{ height: heightInRems + "rem" }}
      >
        <Container className="!py-0">
          <div style={{ height: heightInRems + "rem" }}>{children}</div>
        </Container>
      </div>
    </div>
  );
}

export default StickyBar;
