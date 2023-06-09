import server from "../server/server";
import qs from "qs";

interface searchType {
  pageNumber: number;
  schoolName: string;
}

export const SearchSchool = async ({ pageNumber, schoolName }: searchType) => {
  const query = qs.stringify({
    page: pageNumber,
    keyword: schoolName,
  });
  console.log(query);
  return (await server.get(`/wayg/school/category?${query}`)).data;
};
