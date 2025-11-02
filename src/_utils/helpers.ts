import { useIsDark } from "../hooks/useIsDark.ts";

export function darkStyle(className: string, styles: CSSModuleClasses) {
  const isDark = useIsDark();
  return `${styles[className]} ${isDark && styles[className + '--dark']}`;
}

export function removeBraces(text: string) {
  return text
    .replace(/\{sx\|([^|]*)\|\|[^}]*}/g, '$1') // retrieve 'string' from {sx|string||...}
    .replace(/\{[^}]*}/g, '')                  // delete all other {string}
    .trim();
}
