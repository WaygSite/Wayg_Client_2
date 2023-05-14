import { Header } from "@/components/Header/header";
import { SearchBox } from "@/components/SearchBar/searchBox.logic";
import { Schools } from "@/components/Schools/schools.logic";

import { BackColors } from "@/common/colors";

import styled from "styled-components";
import { Category } from "@/components/Category/category.logic";
import { PageNation } from "@/components/PageNation/pageNation.logic";

export default function SearchPage() {
  return (
    <Bg>
      <Header />
      <SearchBox />
      <Category />
      <Schools />
      <PageNation />
    </Bg>
  );
}

const Bg = styled.div`
  background-color: ${BackColors.SearchBack};
`;
