import styled, { css } from "styled-components";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20vh;
`;

export const Box_V2 = styled.div<{ open: boolean }>`
  transition: all ease 1s 0.2s;
  ${({ open }) =>
    open
      ? css`
          transform: translateX(10rem);
        `
      : null}
`;

export const Box = styled.input`
  border-radius: 15px;
  border: none;
  outline: none;

  box-shadow: 5px 5px 5px 5px #ededed;

  padding-left: 1rem;

  font-size: 1rem;

  width: 40rem;
  height: 3.5rem;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
