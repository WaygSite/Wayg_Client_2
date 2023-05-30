import * as S from "./searchBox.style";

interface SearchViewProps {
  findSchool: (e: React.ChangeEvent<HTMLInputElement>) => void;
  open: boolean;
}

export const SearchView = ({ findSchool }: SearchViewProps) => {
  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
    </S.Search>
  );
};
