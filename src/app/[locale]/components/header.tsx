/**
 * v0 by Vercel.
 * @see https://v0.dev/t/obus3LxsAfo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Logo from "@/app/[locale]/components/logo";
import { Separator } from "@/components/ui/separator";
import consts from "@/lib/consts";
import { trim } from "lodash";
import { Facebook, Instagram, Linkedin, Mouse } from "lucide-react";
import StickyBar from "./sticky-bar";
import { Locale } from "@/types/locale";
import { getDictionary } from "@/lib/dictionaries";
import { T } from "@/types/i18n";

export default async function Header({ t }: { t: T }) {
  const socialLinks = [
    {
      name: "Linkedin",
      icon: Linkedin,
      href: "/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "/",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "/",
    },
  ];

  return (
    <StickyBar isStickyTop className="bg-red-400">
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
        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          <b>{t.follow_us}</b>

          <Separator className="w-4 bg-black" />

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

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">{t.toggle_navigation_menu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 p-4">
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </StickyBar>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MoonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
