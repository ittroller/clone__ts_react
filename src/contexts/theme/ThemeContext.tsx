import React, { createContext, useContext, useLayoutEffect } from 'react';

import { THEME_TYPE } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/stores';
import { changeThemeAction } from 'src/stores/app/theme/theme.action';
import { checkValidTheme } from 'src/utils';

export const ThemeContext = createContext<ITheme.ThemeContext>({
  theme: '',
  setTheme: () => {},
});

export function useTheme(): ITheme.ThemeContext {
  return useContext(ThemeContext);
}

export const ThemeProvider: React.FC<ITheme.ThemeProvider> = ({ children }) => {
  const { theme } = useAppSelector(state => state.app.theme);
  const dispatch = useAppDispatch();

  const setTheme = (themeString: string): void => {
    const themeValue: string = checkValidTheme(themeString);

    void dispatch(changeThemeAction(themeValue));
  };

  useLayoutEffect(() => {
    if (theme === THEME_TYPE.LIGHT) {
      document.body.classList.remove(THEME_TYPE.DARK);
      document.body.classList.add(THEME_TYPE.LIGHT);
    } else {
      document.body.classList.remove(THEME_TYPE.LIGHT);
      document.body.classList.add(THEME_TYPE.DARK);
    }
  }, [theme]);

  const value = { theme, setTheme };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
