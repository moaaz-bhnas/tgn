import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { T } from "@/types/i18n";
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

type Props = { t: T; color?: "white" | "black" };

function FollowUs({ t, color = "black" }: Props) {
  const socialLinks = [
    {
      name: "in",
      icon: FaLinkedin,
      href: "/",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      href: "/",
    },
    {
      name: "facebook",
      icon: FaFacebook,
      href: "/",
    },
    {
      name: "behance",
      icon: FaBehance,
      href: "/",
    },
  ];

  return (
    <div
      className={cn(
        "hidden items-center gap-2 text-sm font-medium md:flex",
        color == "black" ? "text-black" : "text-white"
      )}
    >
      <b>{t.follow_us}</b>

      <Separator className={cn("w-4 bg-black", color == "black" ? "bg-black" : "bg-white")} />

      <ul className="flex items-center gap-2">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a className="" href={link.href}>
              <link.icon className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FollowUs;
