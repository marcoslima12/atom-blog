import styled, { keyframes } from "styled-components";

const moveRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(20px);
  }
`;

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
  margin: auto;
  padding: 12rem 8.55rem 4.25rem 8.55rem;
  background-color: #290742;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  margin: auto;
  animation: ${fadeInFromRight} 0.7s ease;


  .PeopleImage {
    border-radius: 10px;
  }
`;

export const ExplanationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 45%;
  gap: 1.25rem;
`;

export const Title = styled.h1`
  color: #9e6dc2;
  font-family: Poppins;
  font-size: 2.25rem;
  font-style: normal;
  font-weight: 700;
  animation: ${fadeInFromLeft} 0.7s ease;

`;

export const Description = styled.p`
  color: #fbf6ff;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  animation: ${fadeInFromLeft} 0.7s ease;

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
  &:hover {
    color: #4fff4b;
    transition: all 0.5s;
    transform: scale(1.1);
  } 
`;
 