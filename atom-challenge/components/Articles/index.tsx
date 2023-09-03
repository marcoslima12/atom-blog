import { Container, Content } from "./styles";
import { Article } from "../Article";

export const ArticlesList = () => {
  return (
    <Container>
      <Content>
        <Article
          image="assets/code_image.png"
          isMainArticle
          imageWidth={370}
          date="Janeiro 04, 2022"
          title="Começando no ReactJS em 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
        />
        <Article
          image="assets/code_image.png"
          isMainArticle
          imageWidth={370}
          date="Janeiro 04, 2022"
          title="Começando no ReactJS em 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
        />
        <Article
          image="assets/code_image.png"
          isMainArticle
          imageWidth={370}
          date="Janeiro 04, 2022"
          title="Começando no ReactJS em 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in
        aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed
        tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
        aenean sit vitae, sed tristique. Sed volutpat aenean."
        />
      </Content>
    </Container>
  );
};
