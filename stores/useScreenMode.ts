import { create } from "zustand";

type ScreenMode = "light" | "dark" | "system";

interface ScreenModeState {
  screenMode: ScreenMode;
  setScreenMode: (mode: ScreenMode) => void;
}

export const useScreenMode = create<ScreenModeState>((set) => ({
  screenMode: "system",
  setScreenMode: (mode) => set({ screenMode: mode }),
}));