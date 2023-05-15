import * as S from "./main.style";

import Student from "@/assets/png/Student.png";
import BackGroundCircle from "@/assets/png/BackGroundCircle.png";

import { Header } from "../Header/header";
import { Introduce } from "../Introduce/introduce";
import { SearchBtn } from "../SearchBtn/searchBtn";

export const Main = () => {
  return (
    <S.Bg>
      <Header />
      <S.Container>
        <S.CircleImg src={BackGroundCircle} alt="cirle" />
      </S.Container>
      <S.Main>
        <S.Right>
          <div>
            <S.Title>WayG</S.Title>
            <S.Sub>Where are you going</S.Sub>
            <Introduce />
          </div>
          <SearchBtn />
        </S.Right>
        <S.Left>
          <S.StudentImg src={Student} alt="studentImg" />
        </S.Left>
      </S.Main>
    </S.Bg>
  );
};
