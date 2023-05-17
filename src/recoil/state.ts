import { atom } from "recoil";

export const searchOpen = atom<boolean>({
  key: "open",
  default: false,
});

export const modalStatus = atom<string>({
  key: "modalStatus",
  default: "",
});
