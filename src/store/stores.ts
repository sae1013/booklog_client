import { atom } from "recoil";
import { Book } from "./types";

export const selectedBookStore = atom<Book | null>({
  key: "selectedBook",
  default: null,
});
