import { Container, Content, Title, Wrapper } from "./styles";
import { Article } from "../Article";
import {
  CInImage,
  CanadaImage,
  CodeImage,
  PFLImage,
  PlacaImage,
  SquadImage,
} from "@/assets";

export const ArticlesList = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Além disso, o que mais eu já vivi?</Title>
        <Content>
          <Article
            image={CanadaImage}
            showImage
            date="De setembro de 2017 a fevereiro de 2018"
            title="Intercâmbio no Canadá"
            description="Durante cinco meses, morei em Gander - Newfoudland, no Canadá. Essa foi uma das experiências mais marcantes que já vivi, além de poder ter desenvolvido minhas habilidades no inglês."
            alt="Foto no Canadá"
          />
          <Article
            image={PlacaImage}
            showImage
            date="De janeiro de 2020 a março de 2021"
            title="Jovem Protagonista voluntário"
            description="Voluntário na implantação e manunteção do modelo de educação da Escola da Escolha em escolas públicas por todo o Brasil."
            alt="Foto em frente a uma piscina de um hotel"
          />
          <Article
            image={CInImage}
            showImage
            date="De janeiro e 2019 até o momento"
            title="Estudante do Centro de Informática da UFPE"
            description="Iniciei meus estudos no CIn em Engenhria da Computação, em 2019. Ao final de 2021, realizei reopção e decidi mudar para Sistemas de Informação onde permaneço muito feliz até hoje!"
            alt="Logo do Centro de Informática da UFPE"
          />
        </Content>
      </Wrapper>
    </Container>
  );
};
