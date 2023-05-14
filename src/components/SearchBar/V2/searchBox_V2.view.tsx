import * as S from "./searchBox_V2.style";

import Magnifier from "@/assets/png/Magnifier.png";

interface SearchViewProps {
  spread: () => void;
}

export const SearchView_V2 = ({ spread }: SearchViewProps) => {
  return (
    <S.Box_V2>
      <S.MagnifierImg src={Magnifier} alt="searchImg" onClick={spread} />
    </S.Box_V2>
  );
};
