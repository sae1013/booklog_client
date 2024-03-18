import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Book } from "./types";
import { Profile } from "./types";

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

interface userState {
  user: Profile | null;
  setUser: (user: Profile) => void;
  clearUser: () => void;
}

export const useUserStore = create<userState>((set) => ({
  user: null,
  setUser: (user: Profile) => set({ user }),
  clearUser: () => set({ user: null }),
}));
