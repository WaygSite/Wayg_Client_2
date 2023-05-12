import { useQuery } from "@tanstack/react-query";
import { SearchSchool } from "./auth";

export const useSchoolQuery = () => {
  const useSchoolInfoQuery = (pageNumber: number, schoolName: string) => {
    const SchoolInfoQuery = useQuery(
      ["SearchSchool", pageNumber, schoolName],
      () => SearchSchool({ pageNumber, schoolName })
    );
    return SchoolInfoQuery;
  };

  return { useSchoolInfoQuery };
};
