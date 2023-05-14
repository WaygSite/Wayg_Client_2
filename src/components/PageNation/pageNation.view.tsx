import { useEffect, useState } from "react";

import { pageNum } from "@/recoil/data";
import * as S from "./pageNation.style";
import { useRecoilState } from "recoil";

export const PageNationView = () => {
  const [number, setNumber] = useRecoilState(pageNum);
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const ClickBtn = (pageNumber: number) => {
    if (pageNumber === 0) {
      return 1;
    } else if (pageNumber === 6) {
      //나중에 페이지네이션 알고리즘을 사용하여 할 예정
      setPageNumbers(pageNumbers.map(e => e + 1));
    }

    setPage(pageNumber);
    setNumber(pageNumber);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <S.PageNation>
      <S.First>맨 뒤</S.First>
      <S.Before onClick={() => ClickBtn(number - 1)}>뒤</S.Before>
      {pageNumbers.map(number => (
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
