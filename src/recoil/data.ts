import { atom } from "recoil";

export const data = atom<any>({
  key: "data",
  default: "",
});

export const dataNum = atom<number>({
  key: "dataNum",
  default: 0,
});

export const pageNum = atom<number>({
  key: "pageNum",
  default: 1,
});

export const showPageNum = atom<number>({
  key: "showPageNum",
  default: 1,
});

export const maxPage = atom<number>({
  key: "maxPage",
  default: 0,
});
