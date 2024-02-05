import { LegacyImage } from "components";
import { FC } from "react";

export const Sample: FC = () => (
  <div>
    <LegacyImage
      src="https://placehold.jp/150x150.png"
      alt="Sample"
      width={150}
      height={150}
    />
  </div>
);
