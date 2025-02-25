import Image from "next/image";
import Container from "./container";
import { T } from "@/types/i18n";
import { Mouse } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  t: T;
};

function Footer({ t }: Props) {
  function renderLogosBar() {
    return (
      <div className="flex items-center justify-center">
        <Image
          className="w-28 me-auto"
          src={"/images/logos/tgn-3-lines-white.png"}
          alt={"Top Growth Network"}
          width={0}
          height={0}
          sizes="10rem"
        />

        <div className="flex items-center gap-2 absolute">
          <Image className="w-8" src={"/images/icons/diamond-white.png"} alt="" width={0} height={0} sizes="10rem" />
          <p className="font-bold text-4xl">{t.be_different}</p>
          <Image className="w-8" src={"/images/icons/diamond-white.png"} alt="" width={0} height={0} sizes="10rem" />
        </div>

        <Mouse className="w-12 h-12" />
      </div>
    );
  }

  function renderLinksBar() {
    const columns = [
      {
        label: t.contact_us,
        links: [
          { label: t.contact_sales, href: "/" },
          { label: t.send_feedback, href: "/" },
          { label: t.who_we_are, href: "/" },
          { label: t.services, href: "/" },
        ],
      },
      {
        label: t.follow_us,
        links: [
          { label: t.instagram, href: "/" },
          { label: t.facebook, href: "/" },
          { label: t.linkedin, href: "/" },
          { label: t.behance, href: "/" },
        ],
      },
      {
        label: t.come_on_board,
        links: [
          { label: t.get_interview, href: "/" },
          { label: t.looking_for, href: "/" },
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
      <div className="flex items-center justify-between">
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
