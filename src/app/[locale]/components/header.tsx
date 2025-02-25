"use client";

import Link from "next/link";
import Logo from "@/app/[locale]/components/logo";
import { Separator } from "@/components/ui/separator";
import consts from "@/lib/consts";
import { trim } from "lodash";
import { Facebook, Instagram, Linkedin, Mouse } from "lucide-react";
import StickyBar from "./sticky-bar";
import { T } from "@/types/i18n";
import { useWindowScroll } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
import SideNav from "./side-nav";
import FollowUs from "./follow-us";

export default function Header({ t }: { t: T }) {
  const [{ y }] = useWindowScroll();

  return (
    <StickyBar
      isStickyTop
      containerClassName="bg-red-400"
      className={cn("bg-red-400 transition", y && y > 0 ? "bg-red-400/90 backdrop-blur shadow-sm" : "")}
    >
      <nav className="h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Contact Us "Desktop" */}
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          <b>{t.contact_us}</b>

          <Separator className="w-4 bg-black" />

          <a href={`tel:${trim(consts.CONTACT_NUMBER)}`}>{consts.CONTACT_NUMBER}</a>
        </div>

        {/* Mouse */}
        <Mouse className="w-6" />

        {/* Follow Us "Desktop" */}
        <FollowUs t={t} />

        <SideNav t={t} />
      </nav>
    </StickyBar>
  );
}
