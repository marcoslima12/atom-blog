import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 37rem;
  //background-color: #290742;
  margin: auto;
  padding: 2rem 0;
  //border: 2px solid green;
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
`;

export const ExplanationContainer = styled.main`
  //background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //border: 2px solid red;
  height: 100%;
  gap: 1.25rem;
`;

export const MainTitle = styled.h1`
  color: #9e6dc2;
  font-family: Poppins;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
`;

export const Description = styled.p`
  color: #fbf6ff;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
`;

export const LinkContainer = styled.div`
  color: #9e6dc2;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  a {
    margin-right: 0.5rem;
  }
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.div`
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  //mix-blend-mode: overlay; 
`;
