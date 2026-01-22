import { useIsDark } from "../hooks/useIsDark.ts";

export function darkStyle(className: string, styles: CSSModuleClasses) {
  const isDark = useIsDark();
  return `${styles[className]} ${isDark && styles[className + '--dark']}`;
}

export function darkClass(className: string, styles: CSSModuleClasses, isDark: boolean) {
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

  return { Authorization: `Bearer ${token}` }
}

export async function getUserWords() {
  const api = getBackendApi();
  const res = await fetch(`${api}/userwords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...getAuthorization(),
    },
  })

  return await res.json()
}

export async function increaseWordCountRepeat(wordId: number) {
  const api = getBackendApi();
  const res = await fetch(`${api}/userwords/${wordId}/repeat`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...getAuthorization(),
    }
  })

  if (!res.ok) {
    throw new Error('failed to increase count repeat');
  }
}
