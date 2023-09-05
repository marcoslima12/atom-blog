import { useEffect, useState } from "react";
import { Header, Banner, ArticlesList, Navbar } from "../components";
import { Container } from "../styles/home_styles";
import { LinearProgress } from "@mui/material";

export default function Homepage() {
  return (
    <Container>
      <Navbar />
      <Header />
      <hr />
      <Banner />
      <ArticlesList />
    </Container>
  );
}
