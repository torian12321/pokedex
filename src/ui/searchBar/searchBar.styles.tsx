import styled from "styled-components";

export const Input = styled.input`
  background: white;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  border: 2px solid #549fe9;
  padding: 8px 24px;
  transition: box-shadow 0.4s ease-in-out;

  &:focus-within {
    box-shadow: 0px 0px 5px 1px #549fe9;
  }
`;
