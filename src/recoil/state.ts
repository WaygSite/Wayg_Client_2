import { atom } from "recoil";

export const searchOpen = atom<boolean>({
  key: "open",
  default: false,
});
