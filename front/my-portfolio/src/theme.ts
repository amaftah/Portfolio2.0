import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#ff4081' },
    background: { default: '#f4f4f4', paper: '#ffffff' },
    text: { primary: '#000000', secondary: '#555555' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
    text: { primary: '#ffffff', secondary: '#bbbbbb' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});
