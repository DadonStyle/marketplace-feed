import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    headingGray: {
      main: string;
    };
    linkBlue: {
      main: string;
    };
  }

  interface Palette {
    headingGray: {
      main: string;
    };
    linkBlue: {
      main: string;
    };
  }
}

type Props = {
  children?: React.ReactNode;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        primary: { main: '#000' },
        secondary: { main: '#2DB8A1' },
        headingGray: { main: '#949796' },
        linkBlue: { main: '#F4F9FF' },
        background: {
          default: '#f6f8f7',
          paper: '#FFF',
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 0,
          md: 800,
          lg: 1280,
          xl: 1920,
        },
      },
      typography: {
        h1: { fontSize: '20px', fontWeight: 500, fontFamily: 'Poppins, DM Sans, sans-serif' },
        h2: { fontSize: '18px', fontWeight: 500, fontFamily: 'Poppins, DM Sans, sans-serif' },
        h3: { fontSize: '14px', fontWeight: 500, fontFamily: 'Poppins, DM Sans, sans-serif' },
        body1: { fontSize: '14px', fontWeight: 400, color: '#000', fontFamily: 'DM Sans, sans-serif' },
        body2: { fontSize: '12px', fontWeight: 400, color: '#999', fontFamily: 'DM Sans, sans-serif' },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              direction: 'ltr',
              fontFamily: 'DM Sans, sans-serif',
            },
          },
        },
      },
    }),
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
