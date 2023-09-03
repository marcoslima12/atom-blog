import { Navbar } from "@/components";
import { Container, AboutMeTitle, Content } from "./styles";
import Image from "next/image";
import { PersonImage } from "@/assets";

export default function About() {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <AboutMeTitle>
            Experimentador <br /> da vida!
          </AboutMeTitle>
          {/*    {  <Image
          className="PersonImage"
          src={PersonImage}
          alt="Foto da pessoa"
        /> } */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            esse iusto vitae nulla, inventore, ipsum vero excepturi voluptatibus
            consectetur perspiciatis aperiam eum soluta sit, non dicta? Dolor,
            aliquam? Facere, recusandae.
          </p>
        </Content>
      </Container>
    </>
  );
}
