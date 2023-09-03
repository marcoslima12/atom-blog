import { CodeImage } from "@/assets";
import { Container } from "./styles";
import Image from "next/image";

interface ArticleProps {
  image: string;
  isMainArticle?: boolean;
  imageWidth?: number;
  date: string;
  title: string;
  description: string;
}

export const Article = ({
  image,
  isMainArticle,
  imageWidth,
  date,
  title,
  description,
}: ArticleProps) => {
  return (
    <Container>
      {isMainArticle && (
        <Image
          width={imageWidth && imageWidth}
          src={CodeImage}
          alt="Imagem relacionada ao artigo"
        />
      )}
      <p className="date">{date}</p>
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </Container>
  );
};
