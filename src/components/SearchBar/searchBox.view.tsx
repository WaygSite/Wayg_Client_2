import * as S from "./searchBox.style";

import Magnifier from "@/assets/png/Magnifier.png";

interface SearchViewProps {
  findSchool: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bar: boolean;
}

export const SearchView = ({ findSchool, bar }: SearchViewProps) => {
  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
      {bar ? null : (
        <S.Box_V2>
          <S.MagnifierImg src={Magnifier} alt="searchImg" />
        </S.Box_V2>
      )}
    </S.Search>
  );
};
