import { Header, Banner, ArticlesList } from "../components";
import { Container } from "./styles";

export default function Homepage() {
  return (
    <Container>
      <Header />
      <hr />
      <Banner />
      <ArticlesList />
    </Container>
  );
}
