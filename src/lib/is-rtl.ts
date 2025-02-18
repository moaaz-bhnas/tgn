import { Locale } from "@/types/locale";

export default function isRtl(locale: Locale) {
  return locale == "ar";
}
