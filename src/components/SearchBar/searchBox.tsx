import * as S from "./searchBox.style";
import { useSchoolQuery } from "@/utils";
import { useEffect, useState } from "react";

export const SearchBox = () => {
  const [name, setName] = useState<any>("");
  const [page, setPage] = useState<number>(1);
  const { useSchoolInfoQuery } = useSchoolQuery();

  const findSchool = (e: any) => {
    setName(e.target.value);
  };

  const schoolInfoQuery = useSchoolInfoQuery(page, name);

  useEffect(() => {
    console.log(schoolInfoQuery.data?.content);
  }, [schoolInfoQuery]);

  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
    </S.Search>
  );
};
