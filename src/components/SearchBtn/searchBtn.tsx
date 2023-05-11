import * as S from "./searchBtn.style";
import Search from "@/assets/png/Search.png";
import { Url } from "@/utils/url/url";

export const SearchBtn = () => {
  return (
    <S.Button href={`${Url.MAIN + Url.SEARCH}`}>
      학교 검색하기
      <S.goSearchImg src={Search} alt="searchImg" />
    </S.Button>
  );
};
