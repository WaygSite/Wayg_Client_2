import { useEffect, useState } from "react";

import * as S from "./pageNation.style";

import { useRecoilState } from "recoil";
import { pageNum } from "@/recoil/data";

export const PageNationView = ({ pageNumbers, page, setPage }: any) => {
  const [number, setNumber] = useRecoilState(pageNum);

  const ClickBtn = (pageNumber: number) => {
    if (pageNumber === 0) {
      return 1;
    }
    setPage(pageNumber); //내가 어떤페이지를 눌렀는지 확인 시켜주는 페이지
    setNumber(pageNumber); //백엔드로 보내는 데이터
    //검색어를 통해서 schoolInfoQuery의 length가 1이상이면 setPage와 setNumber를 1로 초기화
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <S.PageNation>
      <S.First>맨 뒤</S.First>
      <S.Before onClick={() => ClickBtn(number - 1)}>뒤</S.Before>
      {pageNumbers.map((number: any) => (
        <S.PageBtn
          key={number}
          onClick={() => ClickBtn(number)}
          active={page === number}
        >
          {number}
        </S.PageBtn>
      ))}
      <S.Next onClick={() => ClickBtn(number + 1)}>앞</S.Next>
      <S.Last>맨 앞</S.Last>
    </S.PageNation>
  );
};
