import * as S from "./header.style";

export const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Wayg</S.Title>
        <S.Join>
          <S.SignIn onClick={() => alert("아직 생각 안했다.")}>
            Sign in
          </S.SignIn>
          <S.SignUp onClick={() => alert("아직 생각 안했다.")}>
            Sign up
          </S.SignUp>
        </S.Join>
      </S.Header>
    </S.Container>
  );
};
