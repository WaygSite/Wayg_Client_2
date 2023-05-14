import * as S from "./schools.style";

export const SchoolsView = ({ data, num }: any) => {
  return (
    <>
      {num === 0 ? (
        <S.Phrase>
          <S.Text>현재 찾으시는 학교는 없는 학교입니다.</S.Text>
        </S.Phrase>
      ) : null}
      <S.Container>
        <S.Grid num={num}>
          {data.data?.content.map((e: any) => (
            <S.Card>
              <S.SchoolLogo>
                <div>여기는 사진</div>
              </S.SchoolLogo>
              <S.Introduce>
                <S.Title>{e.school_name}</S.Title>
                <S.SubIntro>
                  <div>주소 : {e.address}</div>
                  <div>TEL : {e.call_num}</div>
                </S.SubIntro>
              </S.Introduce>
            </S.Card>
          ))}
        </S.Grid>
      </S.Container>
    </>
  );
};
