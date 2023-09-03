import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(30px); // Mude o valor conforme necessário
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: auto;
  padding: 4.25rem 8.55rem;
  background-color: #290742;
`;

export const Content = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  max-width: 1440px;
  margin: auto;
`;

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  height: 100%;
  gap: 1.25rem;
`;

export const Title = styled.h1`
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

export const LinkContainer = styled.a`
  color: #9e6dc2;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  .arrow_icon {
    animation: ${moveRight} 0.7s ease infinite alternate;
  }
`;

export const ImageContainer = styled.div`
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
`;
