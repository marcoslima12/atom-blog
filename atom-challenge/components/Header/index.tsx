import { CodeImage } from "@/assets";
import { Navbar } from "..";
import {
  Body,
  Container,
  Description,
  ExplanationContainer,
  MainTitle,
  LinkContainer,
  ImageContainer,
} from "./styles";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <Container>
      <Navbar />
      <Body>
        <ExplanationContainer>
          <MainTitle>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </MainTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </Description>
          <LinkContainer>
            <a href="wwww.google.com">Ver mais</a>
            <ArrowRight color="#4FFF4B" size={25} />
          </LinkContainer>
        </ExplanationContainer>
        <ImageContainer>
          <Image src={CodeImage} alt="Imagem a ser mostrada" />
        </ImageContainer>
      </Body>
    </Container>
  );
};
