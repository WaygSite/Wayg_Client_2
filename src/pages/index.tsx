import { Main } from "../components/Main/main";
import { NextSeo } from "next-seo";
import { Site_Url } from "@/utils/url/url";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Wayg"
        description="부산시의 고등학교 진학을 도와주는 Wayg!"
        openGraph={{
          url: `${Site_Url.MAIN_CLIENT}`,
          images: [
            {
              url: "https://ifh.cc/g/dl2tno.jpg",
              width: 800,
              height: 400,
            },
          ],
        }}
      />
      <Main />
    </>
  );
}
