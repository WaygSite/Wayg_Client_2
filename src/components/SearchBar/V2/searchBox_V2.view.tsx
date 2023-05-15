import * as S from "./searchBox_V2.style";

import Magnifier from "@/assets/png/Magnifier.png";

import { searchOpen } from "@/recoil/state";
import { useRecoilValue } from "recoil";

interface SearchViewProps {
  spread: () => void;
}

export const SearchView_V2 = ({ spread }: SearchViewProps) => {
  const open = useRecoilValue(searchOpen);
  return (
    <S.Box_V2 open={open}>
      <S.MagnifierImg src={Magnifier} alt="searchImg" onClick={spread} />
    </S.Box_V2>
  );
};
