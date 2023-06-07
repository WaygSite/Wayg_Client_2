import styled from "styled-components";
import Image from "next/image";
import { BackColors } from "@/common/colors";

export const Bg = styled.div`
  background-color: ${BackColors.MainBack};
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 1;
`;

/* Right css in js */
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 2;

  height: 50vh;
`;

export const Title = styled.p`
  font-size: 6vw;
  font-family: "Inter", sans-serif;

  margin-bottom: 2vw;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  color: #14213d;

  margin-bottom: 3vw;
`;

/* Left css in js */
export const Left = styled.div`
  display: flex;
  align-items: flex-end;

  z-index: 1;

  height: 90vh;
`;

export const CircleImg = styled(Image)`
  position: fixed;

  right: 0;
  width: 75vw;
  height: 90vh;

  z-index: -1;

  @media screen and (max-width: 1024px) {
    width: 85vw;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StudentImg = styled(Image)`
  width: 25vw;
  height: 90vh;

  @media screen and (max-width: 1024px) {
    width: 35vw;
    height: 80vh;
  }
`;
