import { SearchBox_V2 } from "./V2/searchBox.logic";
import * as S from "./searchBox.style";

interface SearchViewProps {
  findSchool: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
  bar: boolean;
}

export const SearchView = ({ findSchool, bar }: SearchViewProps) => {
  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
      {bar ? null : (
        <div>
          <SearchBox_V2 />
        </div>
      )}
    </S.Search>
  );
};
