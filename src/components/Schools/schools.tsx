import { SchoolsView } from "./schools.view";

import { data, dataNum } from "@/recoil/data";
import { useRecoilValue } from "recoil";

export const Schools = () => {
  const schoolData = useRecoilValue(data);
  const num = useRecoilValue(dataNum);

  return <SchoolsView data={schoolData} num={num} />;
};
