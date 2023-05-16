import { Main } from "../components/Main/main";
import { NextSeo } from "next-seo";
import { Site_Url } from "@/utils/url/url";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Wayg"
        description="Wayg메인페이지"
        openGraph={{
          url: `${Site_Url.MAIN_CLIENT}`,
        }}
      />
      <Main />
    </>
  );
}
