import { Navbar } from "@/components";
import { Container, AboutMeTitle, Content, AboutMeDescription } from "./styles";
import Image from "next/image";
import { AuthorImage, PersonImage } from "@/assets";
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
              src={AuthorImage}
              alt="Foto da pessoa"
            />
          }
          <AboutMeDescription>
            Também chamado de <span>Marcante</span>, sou filho de Antônio e
            Rosineide, nascido e criado em Timbaúba - PE, mas atualmente moro em
            Recife. Sou fã de música e apaixonado por experiências, conexões e
            pessoas! <br />
            Sou entusiasta de experiências e de como elas mudam nossas
            perspectivas e a maneira como vemos o mundo.
          </AboutMeDescription>
        </Content>
      </Container>
    </>
  );
}
