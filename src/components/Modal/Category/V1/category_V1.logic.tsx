import { modalStatus } from "@/recoil/state";
import { Category_V1_View } from "./category_V1.view";
import { useRecoilState } from "recoil";

export const Category_V1 = () => {
  const [category, setCategory] = useRecoilState(modalStatus);

  const Close = () => {
    setCategory("");
  };
  return <Category_V1_View Close={Close} />;
};
