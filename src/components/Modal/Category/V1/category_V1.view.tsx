import * as S from "./category_V1.style";

export interface CloseModal {
  Close: () => void;
}

export const Category_V1_View = ({ Close }: CloseModal) => {
  return (
    <>
      <S.Bg onClick={Close}></S.Bg>
      <S.CategoryV1>
        <S.Title>카테고리</S.Title>
        <S.Choice>
          <S.Type>설립유형</S.Type>
        </S.Choice>
      </S.CategoryV1>
    </>
  );
};
