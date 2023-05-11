import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 18rem;
  height: 1.5rem;
  padding: 1.5rem;

  font-size: 1.5rem;
  font-weight: 600;

  border: none;
  text-decoration: none;

  background-color: black;
  color: white;

  cursor: pointer;

  transition: all 0.2s;
  :active {
    transform: scale(0.95);
  }
`;

export const goSearchImg = styled(Image)`
  width: 4rem;
  height: auto;
`;
