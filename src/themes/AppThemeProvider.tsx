import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: { main: '#134DE4' },
        secondary: { main: '#BCD5FF' },
        text: { primary: '#000', secondary: '#999', disabled: '#C3C1BD' },
      },
      typography: {
        fontFamily: 'Inter, sans-serif',
        h1: { fontSize: '20px', fontWeight: 700 },
        h2: { fontSize: '18px', fontWeight: 700 },
        body1: { fontSize: '14px', fontWeight: 500 },
        body2: { fontSize: '12px', fontWeight: 500 },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              direction: 'rtl',
              fontFamily: 'Inter, sans-serif',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
