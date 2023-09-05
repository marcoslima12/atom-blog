import styled from "styled-components";

export const MediaContainer = styled.div`
  gap: 1.5rem;
  display: flex;
  align-items: center;
  hr {
    color: #4fff4b;
    margin: auto;
    margin-top: 0.5rem;
    width: 10%;
  }
  &:hover {
    hr {
      width: 100%;
      transition: all 0.5s;
    }
  }
`;
