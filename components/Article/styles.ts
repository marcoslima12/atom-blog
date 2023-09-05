import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 10px;
  &:hover {
    transform: scale(1.04);
    transition: all 300ms;
    //box-shadow: 2.5px 2.5px 10px #888888;
  }

  p.date {
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  h3 {
    color: #290742;
    font-family: Roboto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
  }

  p.description {
    color: #000;
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
  }

  .ArticleImage {
    border-radius: 10px;
    max-width: 100%;
    max-height: 350px;
  }
`;
