import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
`;
export const Grid = styled.div<{ num: number }>`
  display: grid;
  justify-items: center;

  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  width: 85%;

  ${({ num }) =>
    num === 0
      ? css`
          height: 21.7vh;
        `
      : null}

  @media screen and (max-width: 1128px) {
    width: 100%;
  }

  @media screen and (max-width: 960px) {
    width: 70%;
  }
`;

export const Card = styled.div`
  width: 18rem;
  height: 23rem;

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  background-color: white;

  cursor: pointer;

  margin-bottom: 2rem;

  transition: all 0.2s;
  :hover {
    transform: scale(1.02);
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

// 찾는 학교가 없을 경우의 문구 css in js
export const Phrase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40vh;
`;

export const Text = styled.p`
  color: gray;
  font-size: 2rem;
  font-weight: 600;
`;
