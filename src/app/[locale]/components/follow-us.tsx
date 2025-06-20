import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { T } from "@/types/i18n";
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { createApi } from "@/lib/api";
import { Locale } from "@/types/locale";

type Props = {
  t: T;
  color?: "white" | "black";
  locale: Locale;
};

async function FollowUs({ t, color = "black", locale }: Props) {
  const api = createApi({ language: locale });
  const settings = await api.getSettings();
  const { links_social } = settings.message;

  const socialLinks = [
    {
      name: "behance",
      icon: FaBehance,
      href: links_social.behance_link,
    },
    {
      name: "instagram",
      icon: FaInstagram,
      href: links_social.instagram_link,
    },
    {
      name: "facebook",
      icon: FaFacebook,
      href: links_social.facebook_link,
    },
    {
      name: "linkedin",
      icon: FaLinkedin,
      href: links_social.linkedin_link,
    },
  ];

  return (
    <div className={cn("flex items-center gap-2 text-sm font-medium", color == "black" ? "text-black" : "text-white")}>
      <b>{t.follow_us}</b>

      <Separator className={cn("w-4 bg-black", color == "black" ? "bg-black" : "bg-white")} />

      <ul className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a className="" href={link.href || "/"} target="_blank">
              <link.icon className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUs;
