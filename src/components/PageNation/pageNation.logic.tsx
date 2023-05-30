import { useState } from "react";
import { PageNationView } from "./pageNation.view";

import { showPageNum } from "@/recoil/data";
import { useRecoilState } from "recoil";

export const PageNation = () => {
  const max = 12;
  const [page, setPage] = useRecoilState(showPageNum);
  const [startPage, setStartPage] = useState(page - 2 <= 0 ? 1 : page - 2);
  const [endPage, setEndPage] = useState(
    startPage + 4 > max ? max : startPage + 4
  );
  const [pageNumbers, setPageNumbers] = useState(
    Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  );

  return (
    <PageNationView
      max={max}
      start={startPage}
      end={endPage}
      pageNumbers={pageNumbers}
      setPageNumbers={setPageNumbers}
      page={page}
      setPage={setPage}
    />
  );
};
