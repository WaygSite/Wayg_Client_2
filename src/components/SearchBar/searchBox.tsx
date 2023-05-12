import * as S from "./searchBox.style";
import { useSchoolQuery } from "@/utils";
import { useEffect, useState } from "react";

export const SearchBox = () => {
  const [name, setName] = useState<any>("");
  const [page, setPage] = useState<number>(1);
  const { useSchoolInfoQuery } = useSchoolQuery();
  const [debouncedName, setDebouncedName] = useState<string>("");

  const findSchool = (e: any) => {
    setName(e.target.value);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedName(name);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  const schoolInfoQuery = useSchoolInfoQuery(page, debouncedName);

  useEffect(() => {
    if (schoolInfoQuery.data?.content) {
      console.log(schoolInfoQuery.data?.content);
    }
  }, [schoolInfoQuery.data?.content]);

  return (
    <S.Search>
      <S.Box onChange={findSchool} placeholder="보고싶은 학교를 검색해보세요" />
    </S.Search>
  );
};
