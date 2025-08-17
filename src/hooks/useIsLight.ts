import { useSelector } from "react-redux";
import { RootState } from "../store.ts";

export const useIsLight = () => {
  return useSelector((state: RootState) => state.darkMode.isLight);
};
