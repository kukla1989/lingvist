import { useIsDark } from "../hooks/useIsDark.ts";

export function darkStyle(className: string, styles: CSSModuleClasses) {
  const isDark = useIsDark();
  return `${styles[className]} ${isDark && styles[className + '--dark']}`;
}