import { useState } from "react";
import { SearchView_V2 } from "./searchBox_V2.view";

import { useRecoilState } from "recoil";
import { searchOpen } from "@/recoil/state";

export const SearchBox_V2 = () => {
  const [open, setOpen] = useRecoilState(searchOpen);
  const spread = () => {
    setOpen(!open);
  };
  //1. true가 되면 이제 css로 가서 애니메이션을 적용을 시킨다
  //2. 그리고 그 애니메이션이 되는 동안 동그라미 검색창 없애기
  return <SearchView_V2 spread={spread} />;
};
