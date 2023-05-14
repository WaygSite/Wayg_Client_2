import styled, { css } from "styled-components";
import { FontColors } from "@/common/colors";

export const PageNation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 15vh;
`;

export const PageBtn = styled.button<{ active: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${FontColors.number};

  background-color: white;
  cursor: pointer;

  background-color: white;

  border: 0;

  width: 3rem;
  height: 3rem;

  ${({ active }) =>
    active
      ? css`
          background-color: #fca311;
          color: black;
        `
      : null}
`;

export const First = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${FontColors.number};

  background-color: white;
  cursor: pointer;

  background-color: white;

  border: 0;

  width: 4rem;
  height: 3rem;
`;

export const Before = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${FontColors.number};

  background-color: white;
  cursor: pointer;

  background-color: white;

  border: 0;

  width: 3rem;
  height: 3rem;
`;

export const Next = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${FontColors.number};

  background-color: white;
  cursor: pointer;

  background-color: white;

  border: 0;

  width: 3rem;
  height: 3rem;
`;

export const Last = styled.button`
  font-size: 1rem;
  font-weight: 600;
  color: ${FontColors.number};

  background-color: white;
  cursor: pointer;

  background-color: white;

  border: 0;

  width: 4rem;
  height: 3rem;
`;
