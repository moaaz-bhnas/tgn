import Container from "./container";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import consts from "@/lib/consts";

type Props = {
  isStickyTop: boolean;
  children: ReactNode;
  heightInRems?: number;
  className?: string;
  containerClassName?: string;
};

function StickyBar({
  isStickyTop,
  children,
  heightInRems = consts.STICKY_BAR_HEIGHT_IN_REMS,
  className = "",
  containerClassName = "",
}: Props) {
  return (
    <div
      style={{
        ...(isStickyTop && { paddingTop: heightInRems + "rem" }),
        ...(!isStickyTop && { paddingBottom: heightInRems + "rem" }),
      }}
      className={containerClassName}
    >
      <div
        className={cn("fixed left-0 right-0 bg-white z-10", isStickyTop ? "top-0" : "bottom-0", className)}
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
