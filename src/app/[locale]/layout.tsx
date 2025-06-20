import { Alexandria, Sora } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import consts from "@/lib/consts";
import isRtl from "@/lib/is-rtl";
import Header from "./components/header";
import Footer from "./components/footer";
import { cn, getFullPath } from "@/lib/utils";
import { createApi } from "@/lib/api";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["latin", "arabic"],
});

// Function to get font classes based on locale
function getFontClasses(locale: Locale) {
  const isArabic = locale === "ar";

  if (isArabic) {
    return {
      variable: alexandria.variable,
      className: alexandria.className,
    };
  } else {
    return {
      variable: sora.variable,
      className: sora.className,
    };
  }
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;

  const api = createApi({ language: locale });
  const settings = await api.getSettings();

  const favicon = settings.message.site_favicon?.path;

  console.log("favicon", getFullPath(favicon));

  return {
    title: {
      default: settings.message.site_title,
      template: `%s | ${settings.message.site_title}`,
    },
    description: settings.message.site_description,
    icons: [{ url: getFullPath(favicon) }],
  };
}

export async function generateStaticParams() {
  return consts.LOCALES.map(function formatLangIntoParam(locale) {
    return { locale };
  });
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const { layout: t } = await getDictionary(locale);

  const fontClasses = getFontClasses(locale);

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body className={cn("antialiased", fontClasses.variable, fontClasses.className)}>
        <Header t={t.header} locale={locale} />

        <main>{children}</main>

        <Footer t={t.footer} locale={locale} />

        <Toaster />
      </body>
    </html>
  );
}
