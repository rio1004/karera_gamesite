import { create } from "zustand";
import { createDosLetraSlice } from "./slices/dosLetraSlice";
import type { DosLetraSlice } from "./types/dosLetraTypes";

type MainStore = DosLetraSlice;

export const useMainStore = create<MainStore>()((...a) => ({
  ...createDosLetraSlice(...a),
}));
