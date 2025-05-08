import Image from "next/image";
import Link from "next/link";
import { T } from "@/types/i18n";
import { Locale } from "@/types/locale";
import { cn } from "@/lib/utils";
import isRtl from "@/lib/is-rtl";
import FollowUs from "./follow-us";
import SideNavSheet from "./side-nav-sheet";
import { SheetClose } from "@/components/ui/sheet";

type Props = {
  t: T;
  locale: Locale;
};

function SideNav({ t, locale }: Props) {
  function renderLogosBar() {
    return (
      <div className="flex items-center justify-between">
        <SheetClose asChild>
          <Link href={`/${locale}/`}>
            <Image
              className="w-28"
              src={"/images/logos/tgn-3-lines-white.png"}
              alt={"Top Growth Network"}
              width={0}
              height={0}
              sizes="10rem"
            />
          </Link>
        </SheetClose>

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
      { label: t.about_us, href: `/${locale}/about-us` },
      { label: t.contact_us, href: `/${locale}/contact-us` },
      { label: t.services, href: `/${locale}/services` },
      { label: t.expertise, href: `/${locale}/expertise` },
      { label: t.come_on_board, href: `/${locale}/come-on-board` },
    ];

    return (
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <SheetClose asChild>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800 hover:text-white flex items-center gap-2 max-w-52"
              >
                <Image src={"/images/icons/diamond-white.png"} alt={""} width={20} height={20} />
                {link.label}
              </Link>
            </SheetClose>
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
      <div className={cn("absolute bottom-14 lg:bottom-6 space-y-1.5", isRtl(locale) ? "left-6" : "right-6")}>
        {elements.map((src) => (
          <Image key={src} src={src} alt="" width={30} height={30} />
        ))}
      </div>
    );
  }

  return (
    <SideNavSheet t={t} locale={locale}>
      <div className="space-y-12">
        {/* Logos */}
        {renderLogosBar()}

        {/* Navigation Links */}
        {renderLinks()}

        {/* Social links */}
        <FollowUs t={t} color="white" locale={locale} />

        {/* Artworks */}
        {renderArtworks()}
      </div>
    </SideNavSheet>
  );
}

export default SideNav;
