import { useSchoolQuery } from "@/utils";
import { useEffect, useState } from "react";
import { SearchView } from "./searchBox.view";

import { useRecoilState } from "recoil";
import { data, dataNum } from "@/recoil/data";

export const SearchBox = () => {
  const [schoolData, setSchoolData] = useRecoilState(data);
  const [num, setNum] = useRecoilState(dataNum);
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { useSchoolInfoQuery } = useSchoolQuery();
  const [debouncedName, setDebouncedName] = useState<string>("");

  const findSchool = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setSchoolData(schoolInfoQuery);
      setNum(schoolInfoQuery.data.content.length);
    }
  }, [schoolInfoQuery.data?.content, schoolInfoQuery.data?.content.length]);

  return <SearchView findSchool={findSchool} />;
};
