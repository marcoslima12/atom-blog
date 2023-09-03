import { Article } from "../Article";
import { Container, Content, PreviwArticles } from "./styles";

export const Banner = () => {
  return (
    <Container>
      <Content>
        <Article
          image="assets/code_image.png"
          isMainArticle
          date="Janeiro 04, 2022"
          title="Começando no ReactJS em 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
        />
        <PreviwArticles>
          <Article
            image=""
            date="Janeiro 04, 2022"
            title="Conheça as principais técnicas para conseguir uma vaga internacional em programação"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
          />
          <Article
            image=""
            date="Janeiro 04, 2022"
            title="Veja a evolução do Front-end na prática"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
          />
        </PreviwArticles>
      </Content>
    </Container>
  );
};
