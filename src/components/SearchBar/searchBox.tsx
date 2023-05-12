import { useSchoolQuery } from "@/utils";
import { useEffect, useState } from "react";
import { SearchView } from "./searchBox.view";

import { useRecoilState } from "recoil";
import { data } from "@/recoil/data";

export const SearchBox = () => {
  const [schoolData, setSchoolData] = useRecoilState(data);
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
      console.log(schoolInfoQuery.data);
    }
  }, [schoolInfoQuery.data?.content]);

  return <SearchView findSchool={findSchool} />;
};
