import { useState } from "react";
import { PageNationView } from "./pageNation.view";

import { useRecoilValue } from "recoil";
import { maxPage } from "@/recoil/data";

export const PageNation = () => {
  const max = 12;
  const [page, setPage] = useState(1);
  const [startPage, setStartPage] = useState(page - 2 <= 0 ? 1 : page - 2);
  const [endPage, setEndPage] = useState(
    startPage + 4 > max ? max : startPage + 4
  );
  const [pageNumbers, setPageNumbers] = useState(
    Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  );

  return (
    <PageNationView
      start={startPage}
      end={endPage}
      pageNumbers={pageNumbers}
      page={page}
      setPage={setPage}
    />
  );
};
