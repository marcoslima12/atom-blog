import { Github, Instagram, LinkedIn, ProfileImage } from "@/assets";
import {
  Container,
  Content,
  ContactTitle,
  ContactMeDescription,
  StyledSocialMedia,
  SocialMediaList,
} from "./styles";
import { Media, Navbar } from "@/components";
import Image from "next/image";

export default function ContactMe() {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <Image
            className="ImageProfile"
            src={ProfileImage}
            alt="Foto de perfil da pessoa"
            width="850"
          />
          <ContactMeDescription>
            Se você busca um profissional que combina habilidades técnicas
            sólidas com uma mentalidade inovadora e compromisso com a
            excelência, estou aqui para colaborar e fazer a diferença.
          </ContactMeDescription>
          <ContactTitle>Fala comigo!</ContactTitle>
          <SocialMediaList>
            <li>
              <StyledSocialMedia
                href="https://github.com/marcoslima12"
                target="_blank"
              >
                {" "}
                <Media
                  image={Github}
                  text="O que já construí no Github"
                  alt="Logo do Github"
                />
              </StyledSocialMedia>
            </li>
            <li>
              <StyledSocialMedia
                href="https://www.linkedin.com/in/marcos-antonio-vital-lima/"
                target="_blank"
              >
                <Media
                  image={LinkedIn}
                  text="Se conecta no LinkedIn"
                  alt="Logo do LinkedIn"
                />
              </StyledSocialMedia>
            </li>
            <li>
              <StyledSocialMedia
                href="https://www.instagram.com/imarcos.antonio/"
                target="_blank"
              >
                {" "}
                <Media
                  image={Instagram}
                  text="Me segue no Instagram"
                  alt="Logo do Instagram"
                />
              </StyledSocialMedia>
            </li>
          </SocialMediaList>
        </Content>
      </Container>
    </>
  );
}
