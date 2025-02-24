import { Sora } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import consts from "@/lib/consts";
import isRtl from "@/lib/is-rtl";
import Header from "./components/header";
import Footer from "./components/footer";
import { cn } from "@/lib/utils";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  const {
    layout: { metadata: t },
  } = await getDictionary(locale);

  return {
    title: {
      default: t.title.default,
      template: t.title.template,
    },
    description: t.description,
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

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body className={cn("antialiased", sora.variable, sora.className)}>
        <Header t={t.header} />

        <main>{children}</main>

        <Footer t={t.footer} />
      </body>
    </html>
  );
}
