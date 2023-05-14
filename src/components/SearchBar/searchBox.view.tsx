import { SearchBox_V2 } from "./V2/searchBox.logic";
import * as S from "./searchBox.style";

interface SearchViewProps {
  findSchool: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  bar: boolean;
}

export const SearchView = ({ findSchool, bar, open }: SearchViewProps) => {
  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
      {bar ? null : (
        <S.Box_V2 open={open}>
          <SearchBox_V2 />
        </S.Box_V2>
      )}
    </S.Search>
  );
};
