import { CodeImage, SquadImage, PFLImage } from "@/assets";
import { Article } from "../Article";
import {
  Container,
  Content,
  PreviwArticles,
  BannerTitle,
  Wrapper,
} from "./styles";

export const Banner = () => {
  return (
    <Container id="ArticlesSection">
      <Wrapper>
        <BannerTitle>Experiências profissionais</BannerTitle>
        <Content>
          <Article
            image={SquadImage}
            showImage
            date="De dezembro de 2022 até o momento"
            title="Gerente de Software"
            description="Responsável por buscar garantir o sucesso do desenvolvimento de software através da elaboração do backlog de atividades e na supervisão contínua de todas as etapas do processo. Minha abordagem se baseia em metodologias ágeis como Scrum e Kanban, o que me permite coordenar as equipes de forma eficaz.
            Além disso, sirvo como ponto de apoio técnico para o squad, garantindo que desafios técnicos sejam superados e que as melhores práticas sejam seguidas ao longo do desenvolvimento. Minha atuação se estende à coordenação dos escopos, prazos e entregáveis, em estreita colaboração com os clientes e o time, com o objetivo de assegurar não apenas uma experiência de alta qualidade, mas também resultados excepcionais para todos os envolvidos."
            alt="Foto do Squad Marcos 23.2"
          />
          <PreviwArticles>
            <Article
              image={CodeImage}
              date="De junho de 2022 a dezembro de 2022"
              title="Desenvolvedor web"
              description="Atuei no desenvolvimento de sistemas web responsivos, com foco especializado no frontend. 
            Minha trajetória inclui a utilização de tecnologias como React, Next.js, Git, Github e TypeScript. 
            Tive uma jornada no desenvolvimento web que me capacitou a transformar designs em produtos finais de alta qualidade, combinando criatividade e conhecimento técnico de maneira eficaz."
              alt="Foto de um código"
            />
            <Article
              image={PFLImage}
              date="De abril até junho de 2023"
              title="Equipe do Processo de Formação de Lideranças"
              description="Fui responsável pela organização do Processo de Formação de Lideranças do CITi 2023.1. Possuindo mais de 20 inscritos, o programa teve como objetivo formar e capacitar futuras lideranças da empresa por meio de treinamentos e de atividades práticas. Selecionar os perfis que estarão compondo o corpo de lideranças na próxima gestão da empresa júnior também foi uma das atribuições da equipe."
              alt="Foto da equipe do PFL"
            />
          </PreviwArticles>
        </Content>
      </Wrapper>
    </Container>
  );
};
