"use client";

import Link from "next/link";
import Logo from "@/app/[locale]/components/logo";
import { Separator } from "@/components/ui/separator";
import consts from "@/lib/consts";
import { trim } from "lodash";
import StickyBar from "./sticky-bar";
import { T } from "@/types/i18n";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import SideNav from "./side-nav";
import FollowUs from "./follow-us";
import Image from "next/image";

export default function Header({ t }: { t: T }) {
  const [{ y }] = useWindowScroll();

  return (
    <StickyBar
      isStickyTop
      containerClassName="bg-tgred"
      className={cn("bg-tgred transition", y && y > 0 ? "bg-tgred/90 backdrop-blur shadow-sm" : "")}
    >
      <nav className="h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Contact Us "Desktop" */}
        <div className="hidden items-center gap-2 text-sm font-medium lg:flex">
          <b>{t.contact_us}</b>

          <Separator className="w-4 bg-black" />

          <a href={`tel:${trim(consts.CONTACT_NUMBER)}`}>{consts.CONTACT_NUMBER}</a>
        </div>

        {/* Mouse */}
        <Image className="w-8" src={"/images/icons/mouse-black.png"} alt="Mouse" width={0} height={0} sizes="10rem" />

        {/* Follow Us "Desktop" */}
        <div className="hidden lg:block">
          <FollowUs t={t} />
        </div>

        <SideNav t={t} />
      </nav>
    </StickyBar>
  );
}
