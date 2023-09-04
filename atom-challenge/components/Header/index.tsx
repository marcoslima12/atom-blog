import { CodeImage, GroupImage } from "@/assets";
import { Navbar } from "..";
import {
  Content,
  Container,
  Description,
  ExplanationContainer,
  Title,
  LinkContainer,
} from "./styles";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <Container>
      <Content>
        <ExplanationContainer>
          <Title>
            Olá. Prazer! Boas-vindas! <br />
            Nesse site, você poderá me conhecer enquanto profissional e pessoa.
            Vamos lá!?
          </Title>
          <Description>
            Sou o Marcos, um entusiasta de tecnologia e inovação apaixonado por
            transformar ideias em soluções de alto impacto através da
            tecnologia. Atualmente, exerço o papel de Gerente de Software no
            CITi, empresa júnior da UFPE com mais de 28 anos de experiência no
            mercado.
          </Description>
          <LinkContainer href="#ArticlesSection">
            Bora me conhecer
            <ArrowRight className="arrow_icon" color="#4FFF4B" size={25} />
          </LinkContainer>
        </ExplanationContainer>
        <Image
          className="PeopleImage"
          src={GroupImage}
          width={600}
          alt="Foto de um grupo de pessoas"
        />
      </Content>
    </Container>
  );
};
