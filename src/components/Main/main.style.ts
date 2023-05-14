import styled from "styled-components";
import Image from "next/image";
import { BackColors } from "@/common/colors";

export const Bg = styled.div`
  background-color: ${BackColors.MainBack};
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1500px) {
    display: none;
  }

  @media screen and (min-height: 800px) {
    display: none;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: -1;
`;

/* Right css in js */
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 1;

  height: 50vh;
`;

export const Title = styled.p`
  font-size: 6rem;
  font-family: "Inter", sans-serif;

  margin-bottom: 2rem;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  color: #14213d;

  margin-bottom: 3rem;
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

  width: 78rem;
  height: 46rem;

  z-index: 1;
`;

export const StudentImg = styled(Image)`
  width: 25rem;
  height: auto;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
