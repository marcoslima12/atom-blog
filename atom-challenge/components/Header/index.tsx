import { CodeImage } from "@/assets";
import { Navbar } from "..";
import {
  Content,
  Container,
  Description,
  ExplanationContainer, 
  Title,
  LinkContainer,
  ImageContainer,
} from "./styles";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const Header = () => {
  
  return (
    <Container>
      <Content>
        <ExplanationContainer>
          <Title>
            Veja o guia definitivo para conquistar seus objetivos como DEV em
            2022
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh
            eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae,
            sed tristique placerat hac.
          </Description>
          <LinkContainer href="#" target="_blank" rel="noopener noreferrer">
            Ver mais
            <ArrowRight className="arrow_icon" color="#4FFF4B" size={25} />
          </LinkContainer>
        </ExplanationContainer>
        <ImageContainer>
          <Image src={CodeImage} alt="parte de um código" />
        </ImageContainer>
      </Content>
    </Container>
  );
};
