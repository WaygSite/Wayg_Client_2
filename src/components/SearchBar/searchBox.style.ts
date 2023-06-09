import styled from "styled-components";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  height: 20vh;
`;

export const Box = styled.input`
  border-radius: 15px;
  border: none;
  outline: none;

  box-shadow: 5px 5px 5px 5px #ededed;

  padding-left: 1rem;

  font-size: 1rem;

  width: 50vw;
  height: 4vw;

  @media screen and (max-width: 960px) {
    width: 70vw;
  }
`;
