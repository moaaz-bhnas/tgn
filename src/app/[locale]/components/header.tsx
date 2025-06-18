import Link from "next/link";
import Logo from "@/app/[locale]/components/logo";
import { Separator } from "@/components/ui/separator";
import { trim } from "lodash";
import { T } from "@/types/i18n";
import SideNav from "./side-nav";
import FollowUs from "./follow-us";
import Image from "next/image";
import { Locale } from "@/types/locale";
import StickyBarWrapper from "./sticky-bar-wrapper";
import { createApi } from "@/lib/api";

export default async function Header({ t, locale }: { t: T; locale: Locale }) {
  const api = createApi({ language: locale });
  const settings = await api.getSettings();

  return (
    <StickyBarWrapper>
      <nav className="h-full flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <Logo locale={locale} />
        </Link>

        {/* Contact Us "Desktop" */}
        <div className="hidden items-center gap-2 text-sm font-medium lg:flex">
          <b>{t.contact_us}</b>

          <Separator className="w-4 bg-black" />

          <a dir="ltr" href={`https://wa.me/${trim(settings.message.contact_phone).replace(/[^0-9]/g, "")}`}>
            {settings.message.contact_phone}
          </a>
        </div>

        {/* Mouse */}
        <Image className="w-8" src={"/images/icons/mouse-black.png"} alt="Mouse" width={0} height={0} sizes="10rem" />

        {/* Follow Us "Desktop" */}
        <div className="hidden lg:block">
          <FollowUs t={t} locale={locale} />
        </div>

        <SideNav t={t} locale={locale} />
      </nav>
    </StickyBarWrapper>
  );
}
