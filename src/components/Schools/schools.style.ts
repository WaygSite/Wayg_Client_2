import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Grid = styled.div<{ num: number }>`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  width: 85%;
  row-gap: 4rem;

  ${({ num }) =>
    num <= 4
      ? css`
          height: 100vh;
        `
      : null}

  @media screen and (max-width: 1128px) {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 18rem;
  height: 23rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: white;

  cursor: pointer;

  transition: all 0.2s;
  :hover {
    transform: scale(1.1);
    box-shadow: 5px 5px 5px 5px #d9d9d9;
  }
`;

export const SchoolLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #efefef;
  height: 13rem;
`;

export const Introduce = styled.div``;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.1rem;

  margin: 10px;
`;

export const SubIntro = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-size: 0.8rem;
  color: #717171;

  margin: 10px;
  height: 6rem;
`;
