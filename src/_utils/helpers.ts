import { useIsDark } from "../hooks/useIsDark.ts";

export function darkStyle(className: string, styles: CSSModuleClasses) {
  const isDark = useIsDark();
  return `${styles[className]} ${isDark && styles[className + '--dark']}`;
}

export function removeBraces(text: string) {
  return text
    .replace(/\{(?!a_link\|)(?!sx\|)[^}]*}/g, '') // skip a_link and sx
    .trim();
}

export function getBackendApi() {
  if (import.meta.env.MODE === 'development') {
    return 'http://localhost:3000';
  }

  return 'https://lingvist-backend.onrender.com';
}

export function getAuthorization() {
  const token = localStorage.getItem('token');
  if (!token) {
    console.error("No token found");
  }
  return `Bearer ${token}`;
}
