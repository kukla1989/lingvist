import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type DarkMode = {
  isLight: boolean;
};

const darkModeSlice = {
  name: "darkMode",
  initialState: { isLight: false },
  reducers: {
    toggle: (state: DarkMode) => {
      state.isLight = !state.isLight;
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
