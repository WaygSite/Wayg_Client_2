import { Header } from "@/components/Header/header";
import { SearchBox } from "@/components/SearchBar/searchBox.logic";
import { Schools } from "@/components/Schools/schools.logic";
import { CategoryBtn } from "@/components/CategoryBtn/categoryBtn.logic";
import { PageNation } from "@/components/PageNation/pageNation.logic";

import { BackColors } from "@/common/colors";
import styled from "styled-components";

export default function SearchPage() {
  return (
    <>
      <Bg>
        <Header />
        <SearchBox />
        <CategoryBtn />
        <Schools />
        <PageNation />
      </Bg>
    </>
  );
}

const Bg = styled.div`
  background-color: ${BackColors.SearchBack};
`;
