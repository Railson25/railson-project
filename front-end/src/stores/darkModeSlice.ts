import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface DarkModeState {
  value: boolean;
}

const getDarkMode = (): boolean => {
  try {
    const darkMode = localStorage.getItem("darkMode");
    return darkMode === "true";
  } catch (error) {
    console.error("Error reading darkMode from localStorage:", error);
    return false;
  }
};

const initialState: DarkModeState = {
  value: getDarkMode(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setDarkMode } = darkModeSlice.actions;

export const selectDarkMode = (state: RootState) => {
  return state.darkMode.value;
};

export default darkModeSlice.reducer;
