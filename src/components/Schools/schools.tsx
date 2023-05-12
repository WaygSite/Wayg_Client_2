import { SchoolsView } from "./schools.view";

import { data } from "@/recoil/data";
import { useRecoilValue } from "recoil";

export const Schools = () => {
  const schoolData = useRecoilValue(data);

  return <SchoolsView data={schoolData} />;
};
