import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: ['"Segoe UI"', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h2: {
      fontSize: '2.8rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#4dabf5',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#4f4f4f',
    },
  },
  ...commonSettings,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e2f',
      paper: '#2a2a3c',
    },
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
  ...commonSettings,
});
