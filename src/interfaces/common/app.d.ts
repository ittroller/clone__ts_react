declare namespace ITheme {
  import React from 'react';

  export interface ThemeContext {
    theme: string;
    setTheme: (theme: string) => void;
  }

  export interface ThemeProvider {
    children: React.ReactNode;
  }
}
