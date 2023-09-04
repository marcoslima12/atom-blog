import { Navbar } from "@/components";
import {
  Container,
  AboutMeTitle,
  Content,
  AboutMeDescription,
  SocialMedia,
  ToKnowMeBetterContainer,
} from "./styles";
import Image from "next/image";
import { PersonImage } from "@/assets";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <AboutMeTitle> 
            Marcos <br /> Antonio,
            <h2>Experimentador da vida!</h2>
          </AboutMeTitle>
          {
            <Image
              className="PersonImage"
              src={PersonImage}
              alt="Foto da pessoa"
            />
          }
          <ToKnowMeBetterContainer>
            <SocialMedia>
              <h3>Um pouco mais de mim</h3>
              <hr />

              <a href="#">
                Instagram <ArrowUpRight size={20} />
              </a>
              <hr />
              <a href="##">
                LinkedIn <ArrowUpRight size={20} />
              </a>
            </SocialMedia>
            <AboutMeDescription>
              Entusiasta da colaboratividade e da maneira que podemos mudar o
              mundo através da tecnologia aliada à diversidade. Me considero um
              experimentador da vida, por estar sempre buscando novos desafios e
              experiências, ter curiosidade e sair da zona de conforto, de
              maneira a aprender e crescer constantemente e em conjunto.
            </AboutMeDescription>
          </ToKnowMeBetterContainer>
        </Content>
      </Container>
    </>
  );
}
