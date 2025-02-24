import Image from "next/image";
import bannerImage from "../../../../public/images/banner.jpg";

type Props = {};

function Banner({}: Props) {
  return (
    <Image
      className="w-full aspect-[3/1] object-cover"
      src={bannerImage}
      alt=""
      width={0}
      height={0}
      sizes="100vw"
      placeholder="blur"
    />
  );
}

export default Banner;
