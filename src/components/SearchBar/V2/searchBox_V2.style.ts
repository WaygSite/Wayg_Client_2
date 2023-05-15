import styled, { css, keyframes } from "styled-components";
import { BackColors } from "@/common/colors";

import Image from "next/image";

export const openTransBorder = keyframes`
    from {
      border-radius: 50px;
      border: 1px solid ${BackColors.MainBack};
    }  
    to{
      padding-right: 10px;
      width: 35rem;
      border-radius: 0px 15px 15px 0px;
    }
`;

export const closeTransBorder = keyframes`
from{
  width: 40rem;
  border-radius: 0px 15px 15px 0px;
      
} 
to {
  width: 3.5rem;
  border-radius: 50px;
}
`;
export const Box_V2 = styled.button<{ open: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;

  background-color: white;

  cursor: pointer;

  border: 1px solid ${BackColors.MainBack};
  border-radius: 50px;

  transition: all 5s;

  ${({ open }) =>
    open
      ? css`
          animation: ${closeTransBorder} 0.2s linear forwards;
        `
      : css`
          animation: ${openTransBorder} 0.2s linear forwards;
          :active {
            transform: scale(0.9);
            background-color: lightgray;
          }
        `}

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const MagnifierImg = styled(Image)`
  width: 1.3rem;
  margin: 10px;
  height: auto;
`;
