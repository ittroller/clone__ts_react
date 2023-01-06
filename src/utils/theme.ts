import { LOCAL_STORAGE_KEY, THEME_TYPE } from 'src/constants';

export function checkValidTheme(themeText?: string): string {
  const localValueTheme = themeText ?? localStorage.getItem(LOCAL_STORAGE_KEY.THEME);

  if (!localValueTheme) {
    return THEME_TYPE.LIGHT;
  }

  if (localValueTheme !== THEME_TYPE.DARK && localValueTheme !== THEME_TYPE.LIGHT) {
    return THEME_TYPE.LIGHT;
  }

  return localValueTheme;
}
