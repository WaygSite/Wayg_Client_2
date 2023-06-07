import { CategoryBtnView } from "./cateogoryBtn.view";
import { modalStatus } from "@/recoil/state";
import { useRecoilState } from "recoil";

export const CategoryBtn = () => {
  const [category, setCategory] = useRecoilState(modalStatus);

  const OnOff = () => {
    setCategory("카테고리");
  };

  return <CategoryBtnView OnOff={OnOff} />;
};
