import styled from "styled-components";
import { BackColors } from "@/common/colors";
import Image from "next/image";

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20vh;
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

export const Box_V2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5rem;
  height: 4.5rem;

  background-color: white;

  cursor: pointer;

  border: 1px solid ${BackColors.MainBack};
  border-radius: 50px;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const MagnifierImg = styled(Image)`
  width: 2rem;
  height: auto;
`;
