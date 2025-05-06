import "server-only";

const dictionaries = {
  en: () => import("@/messages/en.json").then((module) => module.default),
  ar: () => import("@/messages/ar.json").then((module) => module.default),
};

export async function getDictionary(locale: "en" | "ar") {
  return dictionaries[locale]();
}
