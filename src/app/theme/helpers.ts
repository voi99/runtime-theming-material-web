export const LS_SOURCE_COLOR_KEY = "source-color";
export const LS_IS_DARK_MODE_KEY = "dark-mode";

export function getSavedColor(): string | null {
  return localStorage.getItem(LS_SOURCE_COLOR_KEY);
}

export function getSavedThemeMode(): boolean {
  if (localStorage.getItem(LS_IS_DARK_MODE_KEY) === "true") {
    return true;
  }

  return false;
}
