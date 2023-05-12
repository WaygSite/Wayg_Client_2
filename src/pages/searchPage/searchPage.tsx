import { Header } from "@/components/Header/header";
import { SearchBox } from "@/components/SearchBar/searchBox";
import { Schools } from "@/components/Schools/schools";

import { BackColors } from "@/common/colors";

import styled from "styled-components";

export default function SearchPage() {
  return (
    <Bg>
      <Header />
      <SearchBox />
      <Schools />
    </Bg>
  );
}

const Bg = styled.div`
  background-color: ${BackColors.SearchBack};
  height: 100%;
`;
