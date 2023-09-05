import styled, { keyframes } from "styled-components";

const fadeInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbf6ff;
  padding: 12rem 8.55rem 5rem 8.55rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  position: relative;

  .PersonImage {
    width: 60rem;
    height: 40rem;
    position: absolute;
    top: 4rem;
    right: 0;
    animation: ${fadeInFromRight} 1s ease forwards;
  }
`;

export const AboutMeTitle = styled.h1`
  color: #9e6dc2;
  font-family: Poppins;
  font-size: 9rem;
  font-style: normal;
  font-weight: 700;
  position: relative;
  z-index: 1;
  padding-top: 5rem;
  animation: ${fadeInFromLeft} 1s ease forwards;
  h2 {
    font-size: 5rem;
  }
`;

export const AboutMeDescription = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  max-width: 80%;
  padding-top: 8rem;
  &::first-letter {
    font-size: 4rem;
  }
  span {
    font-weight: 700;
    color: #4fff4b;
  }
`;

