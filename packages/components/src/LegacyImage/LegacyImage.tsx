import Image, { ImageProps } from "next/legacy/image";
import { FC } from "react";

export const LegacyImage: FC<ImageProps> = ({ src, ...props }) => {
  return <Image src={src} {...props} />;
};
