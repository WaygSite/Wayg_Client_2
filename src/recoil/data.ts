import { atom } from "recoil";

export const data = atom<any>({
  key: "data",
  default: "",
});

export const dataNum = atom<any>({
  key: "dataNum",
  default: 0,
});
