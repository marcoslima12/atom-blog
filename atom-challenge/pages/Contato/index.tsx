import { Github, Instagram, LinkedIn, ProfileImage } from "@/assets";
import {
  Container,
  Content,
  ContactTitle,
  ContactMeDescription,
  StyledSocialMedia,
  SocialMediaList,
} from "./styles";
import { Navbar } from "@/components";
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
                <Image
                  src={Github}
                  width={80}
                  height={80}
                  alt="Icone do Github"
                />
                Olha o que já construí no Github
              </StyledSocialMedia>
            </li>
            <li>
              <StyledSocialMedia
                href="https://www.linkedin.com/in/marcos-antonio-vital-lima/"
                target="_blank"
              >
                <Image
                  src={LinkedIn}
                  width={80}
                  height={80}
                  alt="Icone do LinkedIn"
                />
                Se conecta no LinkedIn
              </StyledSocialMedia>
            </li>
            <li>
              <StyledSocialMedia
                href="https://www.instagram.com/imarcos.antonio/"
                target="_blank"
              >
                {" "}
                <Image
                  src={Instagram}
                  width={80}
                  height={80}
                  alt="Icone do LinkedIn"
                />
                Me segue no instagram
              </StyledSocialMedia>
            </li>
          </SocialMediaList>
        </Content>
      </Container>
    </>
  );
}
