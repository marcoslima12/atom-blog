import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fbf6ff;
  padding: 0 8.55rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  position: relative;

  .PersonImage {
    position: absolute;
    top: 4rem;
    right: 0;
  }
`;

export const AboutMeDescription = styled.p`
  color: #000;
  font-family: Roboto;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  max-width: 60%;
  &::first-letter {
    font-size: 4rem;
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
  h2 {
    font-size: 5rem;
  }
`;

export const ToKnowMeBetterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 5rem;
  margin-top: 10rem;
  padding-bottom: 5rem;
`;

export const SocialMedia = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  //border: 2px solid red;

  h3 {
    width: 70%;
    color: #290742;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  a {
    //border: 2px solid green;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
   
  }
  hr {
    width: 100%;
     margin: 0.5rem 0 ;
  }
`;
