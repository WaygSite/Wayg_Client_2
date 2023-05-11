import styled from "styled-components";
import { BackColors, ButtonColors } from "@/common/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  background-color: ${BackColors.Orange};

  height: 10vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 90%;

  color: white;
`;

/* Title, css in js */
export const Title = styled.div`
  font-family: "Margarine", cursive;
  font-size: 2.5rem;

  cursor: pointer;
`;

/* Sign, css in js */
export const Join = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 13rem;
  font-size: 1.2rem;
`;

export const SignIn = styled.p`
  cursor: pointer;
`;

export const SignUp = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.5rem;
  height: 3rem;

  border-radius: 10px;

  background-color: ${ButtonColors.Navy};

  cursor: pointer;
`;
