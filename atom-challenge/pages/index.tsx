import { useEffect, useState } from "react";
import { Header, Banner, ArticlesList, Navbar } from "../components";
import { Container } from "./styles";
import { LinearProgress } from "@mui/material";

export default function Homepage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const percentage = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);

    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);
  return (
    <Container>
      <LinearProgress
        className="ProgressBar"
        color="inherit"
        variant="determinate"
        value={scrollPercentage}
        style={{ position: "fixed", top: 0, left: 0, width: "100%" }}
      />
      <Navbar />
      <Header />
      <hr />
      <Banner />
      <ArticlesList />
    </Container>
  );
}
