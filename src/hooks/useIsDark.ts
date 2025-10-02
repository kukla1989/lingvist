import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";

export const useIsDark = () => {
  return useSelector((state: RootState) => state.darkMode.isDark);
};
