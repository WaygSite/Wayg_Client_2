import * as S from "./header.style";
import { Url } from "@/utils/url/url";

export const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title href={`${Url.MAIN}`}>Wayg</S.Title>
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
