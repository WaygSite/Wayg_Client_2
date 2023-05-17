import * as S from "./header.style";
import { Site_Url } from "@/utils/url/url";

import { modalStatus } from "@/recoil/state";
import { useRecoilState } from "recoil";

export const Header = () => {
  const [status, setStatus] = useRecoilState(modalStatus);
  console.log(status);
  return (
    <S.Container>
      <S.Header>
        <S.Title href={`${Site_Url.MAIN_CLIENT}`}>Wayg</S.Title>
        <S.Join>
          <S.SignIn onClick={() => setStatus("signIn")}>Sign in</S.SignIn>
          <S.SignUp onClick={() => setStatus("signUp")}>Sign up</S.SignUp>
        </S.Join>
      </S.Header>
    </S.Container>
  );
};
