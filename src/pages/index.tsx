import { Main } from "../components/Main/main";
import { NextSeo } from "next-seo";
import { Url } from "@/utils/url/url";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Wayg"
        description="Wayg메인페이지"
        openGraph={{
          url: `${Url.MAIN}`,
        }}
      />
      <Main />
    </>
  );
}
