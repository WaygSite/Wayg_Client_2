import styled, { css } from "styled-components";
import { BackColors } from "@/common/colors";

import Image from "next/image";

export const Box_V2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.5rem;
  height: 3.5rem;

  background-color: white;

  cursor: pointer;

  border: 1px solid ${BackColors.MainBack};
  border-radius: 50px;

  transition: all 0.1s;
  :active {
    transform: scale(0.9);
    background-color: lightgray;
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const MagnifierImg = styled(Image)`
  width: 1.3rem;
  height: auto;
`;
