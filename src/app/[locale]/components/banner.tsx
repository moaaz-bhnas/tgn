import Image from "next/image";

type Props = {};

function Banner({}: Props) {
  return (
    <Image
      className="w-full aspect-[3/1] object-cover"
      src="/images/banner.jpg"
      alt=""
      width={0}
      height={0}
      sizes="100vw"
    />
  );
}

export default Banner;
