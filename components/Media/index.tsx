import Image, { StaticImageData } from "next/image";
import { MediaContainer } from "./styles";

interface MediaProps {
  image: StaticImageData;
  text: string;
  alt: string;
}

export const Media = ({ image, text, alt }: MediaProps) => {
  return (
    <MediaContainer>
      <Image src={image} width={80} height={80} alt={alt} />
      <span>
        {text}
        <hr />
      </span>
    </MediaContainer>
  );
};
