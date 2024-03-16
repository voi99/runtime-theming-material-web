import { Theme } from '@material/material-color-utilities';

export const LS_SOURCE_COLOR_KEY = 'source-color';

export function getSavedColor(): string | null {
  return localStorage.getItem(LS_SOURCE_COLOR_KEY);
}
