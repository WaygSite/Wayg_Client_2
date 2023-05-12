import * as S from "./searchBox.style";

export interface SearchViewProps {
  findSchool: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchView = ({ findSchool }: SearchViewProps) => {
  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
    </S.Search>
  );
};
