import { Banner } from "@/components/ArticleSession";
import { Header } from "../components";
import { Container } from "./styles";

export default function Homepage() {
  return (
    <Container>
      <Header />
      <hr />
      <Banner />
    </Container>
  );
}
