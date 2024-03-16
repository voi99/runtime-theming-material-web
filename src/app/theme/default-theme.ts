import {
  themeFromSourceColor,
  argbFromHex,
} from '@material/material-color-utilities';

export const DEFAULT_COLOR = '#8714fa';

export const DEFAULT_THEME = themeFromSourceColor(argbFromHex(DEFAULT_COLOR), [
  {
    name: 'custom-1',
    value: argbFromHex(DEFAULT_COLOR),
    blend: true,
  },
]);
