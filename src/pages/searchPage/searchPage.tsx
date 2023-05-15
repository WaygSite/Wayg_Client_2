import { Header } from "@/components/Header/header";
import { SearchBox } from "@/components/SearchBar/searchBox.logic";
import { Schools } from "@/components/Schools/schools.logic";
import { Category } from "@/components/Category/category.logic";
import { PageNation } from "@/components/PageNation/pageNation.logic";

import { NextSeo } from "next-seo";

import { BackColors } from "@/common/colors";
import styled from "styled-components";
import { Site_Url } from "@/utils/url/url";

export default function SearchPage() {
  return (
    <>
      <NextSeo
        title="Wayg"
        description="학교검색페이지"
        openGraph={{
          url: `${Site_Url.SEARCH}`,
        }}
      />
      <Bg>
        <Header />
        <SearchBox />
        <Category />
        <Schools />
        <PageNation />
      </Bg>
    </>
  );
}

const Bg = styled.div`
  background-color: ${BackColors.SearchBack};
`;
