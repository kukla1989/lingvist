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

  return token ? { Authorization: `Bearer ${token}` } : {} as Record<string, string>;
}

export async function fetchWithAuth(url: string, options: RequestInit = {}): Promise<Response> {
  const token = localStorage.getItem('token');
  const headers: HeadersInit = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  if (!token) {
    handleSessionExpired();
    // create a Response-like object to avoid undefined usage where caller awaits json()
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401 });
  }

  const res = await fetch(url, { ...options, headers });

  if (res.status === 401 || res.status === 403) {
    handleSessionExpired();
  }

  return res;
}

function handleSessionExpired() {
  // Clear stored auth and redirect to login route (HashRouter)
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.setItem('loginMsg', 'Your session expired. Please log in again.');
  if (location.hash !== '#/welcome/login') {
    location.hash = '#/welcome/login';
  } else {
    location.reload();
  }
}

export async function getUserWords() {
  const api = getBackendApi();
  const res = await fetchWithAuth(`${api}/userwords`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}

export async function increaseWordCountRepeat(wordId: number, amount: number) {
  const api = getBackendApi();
  let amountStr = '';
  if (amount !== undefined) {
    amountStr = `/${amount}`;
  }

  const res = await fetchWithAuth(`${api}/userwords/${wordId}/repeat` + amountStr, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (!res.ok) {
    throw new Error('failed to increase count repeat');
  }
}

export function getIsBlurUkrTranslation() {
  return localStorage.getItem('isBlurUkrTranslation') === 'true';
}

export function switchBlurUkrTranslation() {
  localStorage.setItem('isBlurUkrTranslation', (getIsBlurUkrTranslation() ? 'false' : 'true'));
}
