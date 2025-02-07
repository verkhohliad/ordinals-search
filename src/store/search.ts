import { create } from "zustand";

import { createSelectors } from "./createSelectors.ts";

import { DEFAULT_PAGE_SIZE } from "@/config/api";

interface SearchState {
  address: string;
  page: number;
  limit: number;
  setAddress: (address: string) => void;
  setPage: (page: number) => void;
  reset: () => void;
}

const useSearchStoreBase = create<SearchState>((set) => ({
  address: "",
  page: 1,
  limit: DEFAULT_PAGE_SIZE,
  setAddress: (address) => set({ address, page: 1 }), // Reset page when address changes
  setPage: (page) => set({ page }),
  reset: () => set({ address: "", page: 1 }),
}));

// auto-selectors for better performance
export const useSearchStore = createSelectors(useSearchStoreBase);
