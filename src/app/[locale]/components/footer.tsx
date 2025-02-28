import Image from "next/image";
import Container from "../../../components/container";
import { T } from "@/types/i18n";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Locale } from "@/types/locale";

type Props = {
  t: T;
  locale: Locale;
};

function Footer({ t, locale }: Props) {
  function renderLogosBar() {
    return (
      <div className="flex items-center justify-center flex-wrap">
        <Image
          className="hidden lg:block w-28 me-auto"
          src={"/images/logos/tgn-3-lines-white.png"}
          alt={"Top Growth Network"}
          width={0}
          height={0}
          sizes="10rem"
        />

        <div className="flex items-center gap-2 lg:absolute">
          <Image className="w-8" src={"/images/icons/diamond-white.png"} alt="" width={0} height={0} sizes="10rem" />
          <p className="font-bold text-4xl">{t.be_different}</p>
          <Image className="w-8" src={"/images/icons/diamond-white.png"} alt="" width={0} height={0} sizes="10rem" />
        </div>

        <Image
          className="hidden lg:block w-10 ms-auto"
          src={"/images/icons/mouse-white.png"}
          alt={"Top Growth Network"}
          width={0}
          height={0}
          sizes="3rem"
        />
      </div>
    );
  }

  function renderLinksBar() {
    const columns = [
      {
        label: t.contact_us,
        links: [
          { label: t.contact_sales, href: `/${locale}/contact-us` },
          { label: t.send_feedback, href: `/${locale}/contact-us` },
          { label: t.who_we_are, href: `/${locale}/about-us` },
          { label: t.services, href: `/${locale}/services` },
        ],
      },
      {
        label: t.follow_us,
        links: [
          { label: t.instagram, href: `/${locale}/` },
          { label: t.facebook, href: `/${locale}/` },
          { label: t.linkedin, href: `/${locale}/` },
          { label: t.behance, href: `/${locale}/` },
        ],
      },
      {
        label: t.come_on_board,
        links: [
          { label: t.get_interview, href: `/${locale}/apply` },
          { label: t.looking_for, href: `/${locale}/apply` },
        ],
      },
    ];

    return (
      <div className="flex flex-wrap xl:flex-nowrap uppercase justify-between items-start -mx-4">
        {columns.map((column, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-auto flex flex-col xl:flex-row gap-2 p-4">
            <h3 className="font-bold">{column.label}</h3>

            <div className="flex flex-col gap-1">
              {column.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "font-extralight hover:underline",
                    index === 0
                      ? "xl:before:content-[''] xl:before:w-5 xl:before:h-[1px] xl:before:bg-white xl:before:inline-block xl:before:me-1"
                      : ""
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  function renderCopyrightsBar() {
    return (
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <small>{t.copyright}</small>
        <Link className="hover:underline" href={"/"}>
          <small>{t.privacy_terms}</small>
        </Link>
      </div>
    );
  }

  return (
    <footer className="bg-black text-white">
      {/* Logos */}
      <Container>{renderLogosBar()}</Container>

      {/* Links */}
      <Container>{renderLinksBar()}</Container>

      {/* Copyrights */}
      <Container>{renderCopyrightsBar()}</Container>
    </footer>
  );
}

export default Footer;
