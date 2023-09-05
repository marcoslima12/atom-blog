import styled, { keyframes } from "styled-components";

const fadeInFromLeft = keyframes`
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInFromRight = keyframes`
  from {
    transform: translateX(50px);
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
  padding: 15rem 8.55rem 0 8.55rem;
  position: relative;
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  color: black;

  .ImageProfile {
    position: absolute;
    bottom: 0;
    right: 0;
    animation: ${fadeInFromRight} 0.7s ease;
  }

  a {
    color: #290742;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
  }
  li {
    list-style-type: none;
  }
`;
export const SocialMediaList = styled.ul`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  animation: ${fadeInFromLeft} 0.7s ease;
`;

export const StyledSocialMedia = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1rem 0;
`;

export const ContactTitle = styled.h1`
  color: #9e6dc2;
  font-family: Poppins;
  font-size: 5rem;
  font-style: normal;
  font-weight: 700;
  animation: ${fadeInFromLeft} 0.7s ease;
`;

export const ContactMeDescription = styled.p`
  color: #000000;
  font-family: Roboto;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  max-width: 45%;
  animation: ${fadeInFromLeft} 0.7s ease;
`;
