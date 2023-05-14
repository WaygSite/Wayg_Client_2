import { useState } from "react";
import * as S from "./pageNation.style";

export const PageNationView = () => {
  const [page, setPage] = useState(1);
  const pageNumbers = [1, 2, 3, 4, 5];

  const ClickBtn = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <S.PageNation>
      <S.Before>뒤</S.Before>
      {pageNumbers.map(number => (
        <S.PageBtn
          key={number}
          onClick={() => ClickBtn(number)}
          active={page === number}
        >
          {number}
        </S.PageBtn>
      ))}
      <S.Next>앞</S.Next>
    </S.PageNation>
  );
};
