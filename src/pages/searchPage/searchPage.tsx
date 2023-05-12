import { Header } from "@/components/Header/header";
import { SearchBox } from "@/components/SearchBar/searchBox";

import { BackColors } from "@/common/colors";

import styled from "styled-components";

export default function SearchPage() {
  return (
    <Bg>
      <Header />
      <SearchBox />
    </Bg>
  );
}

const Bg = styled.div`
  background-color: ${BackColors.SearchBack};
  height: 100vh;
`;
