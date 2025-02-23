import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import consts from "@/lib/consts";
import isRtl from "@/lib/is-rtl";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const {
    layout: { metadata: dict },
  } = await getDictionary(params.locale);

  return {
    title: {
      default: dict.title.default,
      template: dict.title.template,
    },
    description: dict.description,
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

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header locale={locale} />

        <main>{children}</main>
      </body>
    </html>
  );
}
