"use client";

import TgCloseButton from "@/components/tg-close-button";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { T } from "@/types/i18n";
import { Menu, Mouse } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FollowUs from "./follow-us";
import { useParams } from "next/navigation";
import isRtl from "@/lib/is-rtl";
import { Locale } from "@/types/locale";
import { cn } from "@/lib/utils";

type Props = { t: T };

function SideNav({ t }: Props) {
  const { locale } = useParams();

  function renderLogosBar() {
    return (
      <div className="flex items-center justify-between">
        <Image
          className="w-28"
          src={"/images/logos/tgn-3-lines-white.png"}
          alt={"Top Growth Network"}
          width={0}
          height={0}
          sizes="10rem"
        />

        <Image
          className="w-10"
          src={"/images/icons/mouse-white.png"}
          alt={"Top Growth Network"}
          width={0}
          height={0}
          sizes="10rem"
        />
      </div>
    );
  }

  function renderLinks() {
    const links = [
      { label: t.about_us, href: "/" },
      { label: t.contact_us, href: "/" },
      { label: t.services, href: "/" },
      { label: t.case_study, href: "/" },
      { label: t.come_on_board, href: "/" },
    ];

    return (
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800 hover:text-white flex items-center gap-2 max-w-52"
            >
              <Image src={"/images/icons/diamond-white.png"} alt={""} width={20} height={20} />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  function renderArtworks() {
    const elements = [
      "/images/art/art-3.png",
      "/images/art/art-1.png",
      "/images/art/art-2.png",
      "/images/art/art-4.png",
    ];

    return (
      <div className={cn("absolute bottom-6 space-y-1.5", isRtl(locale as Locale) ? "left-6" : "right-6")}>
        {elements.map((src) => (
          <Image key={src} src={src} alt="" width={30} height={30} />
        ))}
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild className="hover:bg-transparent">
        <Button variant="ghost" size="icon" className="rounded-full">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t.toggle_navigation_menu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        className="bg-black !rounded-s-3xl !bottom-auto !h-auto pt-24"
        side={isRtl(locale as Locale) ? "left" : "right"}
        showClose={false}
      >
        <SheetTitle className="sr-only">{t.main_nav}</SheetTitle>
        <SheetClose asChild>
          <div
            className={cn(
              "absolute top-4 rounded-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
              isRtl(locale as Locale) ? "left-4" : "right-4"
            )}
          >
            <TgCloseButton />
          </div>
        </SheetClose>

        <div className="space-y-12">
          {/* Logos */}
          {renderLogosBar()}

          {/* Navigation Links */}
          {renderLinks()}

          {/* Social links */}
          <FollowUs t={t} color="white" />

          {/* Artworks */}
          {renderArtworks()}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideNav;
