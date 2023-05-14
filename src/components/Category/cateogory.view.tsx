import * as S from "./category.style";

import Category from "@/assets/png/Category.png";

export const CategoryView = () => {
  return (
    <S.Container>
      <S.Category>
        <S.Button>
          <S.Size>
            <S.CateImg src={Category} alt="category" />
            카테고리
          </S.Size>
        </S.Button>
      </S.Category>
    </S.Container>
  );
};
