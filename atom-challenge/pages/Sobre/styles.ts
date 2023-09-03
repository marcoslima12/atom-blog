import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbf6ff;
  padding: 0 8.55rem;

  p {
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    &::first-letter {
      font-size: 3rem;
    }
  }
  position: relative;
  .PersonImage {
    position: absolute;
    top: 3rem;
    right: 5rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
`;

export const AboutMeTitle = styled.h1`
  color: #9e6dc2;
  font-family: Poppins;
  font-size: 8rem;
  font-style: normal;
  font-weight: 700;
`;
