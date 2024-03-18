export const SOURCE_COLOR_KEY = "source-color";
export const DARK_MODE_KEY = "dark-mode";

export function getSavedColor(): string | null {
  return localStorage.getItem(SOURCE_COLOR_KEY);
}

export function isDarkModeSaved(): boolean {
  return localStorage.getItem(DARK_MODE_KEY) !== "false";
}
