import { create } from "zustand";

import { createSelectors } from "./createSelectors.ts";

import { DEFAULT_PAGE_SIZE } from "@/config/api";

interface SearchState {
  address: string;
  limit: number;
  setAddress: (address: string) => void;
  syncWithUrl: (params: { address?: string }) => void;
  reset: () => void;
}

const useSearchStoreBase = create<SearchState>((set) => ({
  address: "",
  limit: DEFAULT_PAGE_SIZE,

  setAddress: (address) => {
    set({ address });

    // Update URL
    const url = new URL(window.location.href);

    if (address) {
      url.searchParams.set("address", address);
    } else {
      url.searchParams.delete("address");
    }
    window.history.pushState({}, "", url.toString());
  },

  syncWithUrl: (params) => {
    if (params.address) {
      set({ address: params.address });
    }
  },

  reset: () => {
    set({ address: "" });

    // Clear URL params
    const url = new URL(window.location.href);

    url.searchParams.delete("address");
    window.history.pushState({}, "", url.toString());
  },
}));

// auto-selectors for better performance
export const useSearchStore = createSelectors(useSearchStoreBase);
