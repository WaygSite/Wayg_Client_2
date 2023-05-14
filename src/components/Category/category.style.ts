import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Category = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 80%;

  @media screen and (max-width: 1128px) {
    width: 90%;
  }

  @media screen and (max-width: 960px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 10rem;
  height: 2.5rem;

  border-radius: 50px;
  border: 3px solid black;

  cursor: pointer;

  background-color: white;
  margin-bottom: 20px;

  :hover {
    background-color: lightgray;
  }
`;

export const Size = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 70%;
`;

export const CateImg = styled(Image)`
  width: 1.5rem;
  height: auto;
`;
