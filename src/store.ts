import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type DarkMode = {
  isLight: boolean;
};

const initialState: boolean = localStorage.getItem("darkMode") === "dark";
const darkModeSlice = {
  name: "darkMode",
  initialState: { isLight: initialState },
  reducers: {
    toggle: (state: DarkMode) => {
      state.isLight = !state.isLight;
      localStorage.setItem("darkMode", state.isLight ? "dark" : "light");
    },
  },
};

const slice = createSlice(darkModeSlice);

export const { toggle } = slice.actions;

export const store = configureStore({
  reducer: {
    darkMode: slice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
