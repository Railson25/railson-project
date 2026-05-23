import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const colorSchemes = ["default", "theme-1", "theme-2"] as const;

export type ColorSchemes = (typeof colorSchemes)[number];

interface ColorSchemeState {
  value: ColorSchemes;
}

const getColorScheme = (): ColorSchemes => {
  try {
    const colorScheme = localStorage.getItem("colorScheme");
    if (colorScheme && colorSchemes.includes(colorScheme as ColorSchemes)) {
      return colorScheme as ColorSchemes;
    }
  } catch (error) {
    console.error("Error reading colorScheme from localStorage:", error);
  }
  return "default";
};

const initialState: ColorSchemeState = {
  value: getColorScheme(),
};

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState,
  reducers: {
    setColorScheme: (state, action: PayloadAction<ColorSchemes>) => {
      state.value = action.payload;
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export const selectColorScheme = (state: RootState) => {
  if (
    !state.colorScheme.value ||
    !colorSchemes.includes(state.colorScheme.value)
  ) {
    return "default";
  }
  return state.colorScheme.value;
};

export default colorSchemeSlice.reducer;
