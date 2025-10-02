import { createSlice } from "@reduxjs/toolkit";

type DarkMode = {
  isDark: boolean;
};

const initialState: boolean = localStorage.getItem("darkMode") === "dark";
const darkModeSlice = {
  name: "darkMode",
  initialState: { isDark: initialState },
  reducers: {
    toggle: (state: DarkMode) => {
      state.isDark = !state.isDark;
      localStorage.setItem("darkMode", state.isDark ? "dark" : "light");
    },
  },
};

const slice = createSlice(darkModeSlice);

export const { toggle } = slice.actions;

export default slice.reducer;