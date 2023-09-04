import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #290742;
  padding: 4.25rem 8.55rem;
  position: fixed;
  z-index: 3;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer = styled.div`
  height: 2.75rem;
  display: flex;
  border: none;
  border-radius: 0.25rem 0rem 0rem 0.25rem;
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9e6dc2;
  border: none;
  width: 4.375rem;
  height: 2.75rem;
  cursor: pointer;
  border-radius: 0rem 0.25rem 0.25rem 0rem;
`;

export const Input = styled.input`
  padding: 0.88rem 5.29rem 0.88rem 1.6rem;
  color: #fbf6ff;
  font-family: Roboto;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  border: none;
  border-radius: 0.25rem 0rem 0rem 0.25rem;
  background: #170027;
`;

export const Navigation = styled.nav`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.2rem;
    height: 1.0625rem;
    border-left: 0.125rem solid transparent;
    border-right: 0.125rem solid transparent;
    &:hover {
      transition: color 0.5s;
      color: #4fff4b;
    }
  }
  .ActiveClass {
    border-left: 0.125rem solid #4fff4b;
  }
  color: #fff;
  font-family: Roboto;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  display: flex;
  gap: 2rem;
`;
