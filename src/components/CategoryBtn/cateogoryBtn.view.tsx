import * as S from "./categoryBtn.style";

import Category from "@/assets/png/Category.png";

interface CategoryViewType {
  OnOff: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CategoryBtnView = ({ OnOff }: CategoryViewType) => {
  return (
    <S.Container>
      <S.Category>
        <S.Button onClick={OnOff}>
          <S.Size>
            <S.CateImg src={Category} alt="category" />
            카테고리
          </S.Size>
        </S.Button>
      </S.Category>
    </S.Container>
  );
};
