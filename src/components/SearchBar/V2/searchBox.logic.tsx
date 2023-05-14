import { useState } from "react";
import { SearchView_V2 } from "./searchBox_V2.view";

import { useRecoilState } from "recoil";
import { searchOpen } from "@/recoil/state";

export const SearchBox_V2 = () => {
  const [open, setOpen] = useRecoilState(searchOpen);
  const spread = () => {
    setOpen(!open);
  };

  return <SearchView_V2 spread={spread} />;
};
