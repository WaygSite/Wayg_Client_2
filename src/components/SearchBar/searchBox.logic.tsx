import { useSchoolQuery } from "@/utils";
import { useEffect, useState } from "react";

import { SearchView } from "./searchBox.view";

import { useRecoilState } from "recoil";
import { data, dataNum, pageNum, maxPage, showPageNum } from "@/recoil/data";
import { useRecoilValue } from "recoil";
import { searchOpen } from "@/recoil/state";

import { Width } from "@/hooks/windowWidth";

export const SearchBox = () => {
  const [showPage, setShowPage] = useRecoilState(showPageNum);
  const [schoolData, setSchoolData] = useRecoilState(data);
  const [num, setNum] = useRecoilState(dataNum);
  const [max, setMax] = useRecoilState(maxPage);
  const [page, setPage] = useRecoilState(pageNum);
  const open = useRecoilValue(searchOpen);

  const [name, setName] = useState<string>("");
  const [debouncedName, setDebouncedName] = useState<string>("");
  const [searchBar, setSearchBar] = useState(true);

  const { useSchoolInfoQuery } = useSchoolQuery();

  const { windowWidth } = Width();

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
    if (name != "") {
      setShowPage(1);
      setPage(1);
      console.log(schoolInfoQuery.data?.content.length);
    }
    if (schoolInfoQuery.data?.totalPages) {
      setMax(schoolInfoQuery.data?.totalPages);
    }
    if (windowWidth <= 900) {
      setSearchBar(false);
    }
    if (schoolInfoQuery.data?.content) {
      setSchoolData(schoolInfoQuery);
      setNum(schoolInfoQuery.data.content.length);
    }
  }, [schoolInfoQuery.data?.content, schoolInfoQuery.data?.content.length]);

  return <SearchView findSchool={findSchool} bar={searchBar} open={open} />;
};
