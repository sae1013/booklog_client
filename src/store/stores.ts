import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { atom } from "recoil";
import { Book } from "./types";

interface selectedBookState {
  selectedBook: Book | null;
  setSelectedBook: (book: Book) => void;
  clearSelectedBook: () => void;
}
export const useSelectedBookStore = create<selectedBookState>((set) => ({
  selectedBook: null,
  setSelectedBook: (book: Book) => set({ selectedBook: { ...book } }),
  clearSelectedBook: () => set({ selectedBook: null }),
}));
