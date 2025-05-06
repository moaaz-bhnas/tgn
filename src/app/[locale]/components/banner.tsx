import Image from "next/image";
import { createApi } from "@/lib/api";
import { Locale } from "@/types/locale";
import { getFullPath } from "@/lib/utils";

type Props = {
  locale: Locale;
};

async function Banner({ locale }: Props) {
  const api = createApi({ language: locale });
  const settings = await api.getSettings();

  return (
    <Image
      className="w-full aspect-[3/1] object-cover"
      src={getFullPath(settings.message.home_slider_image?.path) || "/images/banner.jpg"}
      alt={settings.message.home_slider_image?.title || "Banner"}
      width={0}
      height={0}
      sizes="100vw"
    />
  );
}

export default Banner;
