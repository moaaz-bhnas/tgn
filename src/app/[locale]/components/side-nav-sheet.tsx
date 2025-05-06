"use client";

import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import TgCloseButton from "@/components/tg-close-button";
import { Locale } from "@/types/locale";
import isRtl from "@/lib/is-rtl";
import { T } from "@/types/i18n";

type Props = {
  children: React.ReactNode;
  t: T;
  locale: Locale;
};

export default function SideNavSheet({ children, t, locale }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild className="hover:bg-transparent">
        <Button variant="ghost" className="rounded-full w-20 -me-4">
          <Menu className="!w-full !h-auto" />
          <span className="sr-only">{t.toggle_navigation_menu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-black !rounded-s-3xl !bottom-auto !h-auto pt-24"
        side={isRtl(locale) ? "left" : "right"}
        showClose={false}
      >
        <SheetTitle className="sr-only">{t.main_nav}</SheetTitle>
        <SheetClose asChild>
          <div
            className={cn(
              "absolute top-4 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isRtl(locale) ? "left-4" : "right-4"
            )}
          >
            <TgCloseButton />
          </div>
        </SheetClose>
        <div className="[&_a]:relative [&_a]:z-10">{children}</div>
      </SheetContent>
    </Sheet>
  );
}
