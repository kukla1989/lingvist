import { useIsDark } from "../hooks/useIsDark.ts";

export function darkStyle(className: string, styles: CSSModuleClasses) {
  const isDark = useIsDark();
  return `${styles[className]} ${isDark && styles[className + '--dark']}`;
}

export function removeBraces(text: string) {
  return text
    // .replace(/\{sx\|([^|]*)\|\|[^}]*}/g, '$1') // retrieve 'string' from {sx|string||...}
    // .replace(/\{(?!a_link\|)[^}]*}/g, '')      // remove all {…} except {a_link|…}

    // .replace(/\{sx\|([^|]*)\|\|[^}]*}/g, '$1') // keep sx payload
    .replace(/\{(?!a_link\|)(?!sx\|)[^}]*}/g, '') // skip a_link and sx
    .trim();
}

export function getBackendApi() {
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:3000';
  }

  return 'https://lingvist-backend.onrender.com';
}
