import Image from "next/image";
import { createApi } from "@/lib/api";
import { Locale } from "@/types/locale";
import { getFullPath } from "@/lib/utils";

type Props = {
  locale: Locale;
};

async function Logo({ locale }: Props) {
  const api = createApi({ language: locale });
  const settings = await api.getSettings();

  return (
    <div>
      <Image
        className="w-20 h-auto"
        src={getFullPath(settings.message.site_logo?.path) || "/images/logos/tgn-black.png"}
        alt={settings.message.site_logo?.title || "TGN"}
        width={0}
        height={0}
        sizes="10rem"
      />
    </div>
  );
}

export default Logo;
