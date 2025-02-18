import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/types/locale";
import consts from "@/lib/consts";
import isRtl from "@/lib/is-rtl";

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
    "marketing-layout": { metadata: dict },
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

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={params.locale} dir={isRtl(params.locale) ? "rtl" : "ltr"}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
