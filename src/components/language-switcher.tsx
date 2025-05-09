"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Language {
  code: string;
  label: string;
}

interface LanguageSwitcherProps {
  languages: Language[];
  currentLocale: string;
}

export default function LanguageSwitcher({ languages, currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove the current locale from the path and add the new one
  const getLocalizedPath = (locale: string) => {
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");
    return `/${locale}${pathWithoutLocale}`;
  };

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={getLocalizedPath(lang.code)}
          className={cn(
            "px-3 py-1 text-sm border border-white/20 rounded-full transition-colors",
            currentLocale === lang.code ? "bg-white/10" : "hover:bg-white/5"
          )}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
