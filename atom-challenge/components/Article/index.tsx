import { CodeImage, SquadImage } from "@/assets";
import { Container } from "./styles";
import Image, { StaticImageData } from "next/image";

interface ArticleProps {
  image: StaticImageData;
  showImage?: boolean;
  imageWidth?: number;
  imageHeight?: number;
  date: string;
  title: string;
  description: string;
  alt: string;
}

export const Article = ({
  image,
  showImage,
  imageWidth,
  imageHeight,
  date,
  title,
  description,
  alt,
}: ArticleProps) => {
  return (
    <Container>
      {showImage && (
        <Image
          className="ArticleImage"
          width={imageWidth && imageWidth}
          height={imageHeight && imageHeight}
          src={image}
          alt={alt}
        />
      )}
      <p className="date">{date}</p>
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </Container>
  );
};
