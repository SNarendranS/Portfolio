// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Loventirely, sans-serif',
    h1: { fontWeight: 400 },
    h2: { fontWeight: 400 },
    h5: { fontWeight: 300 },
    body1: { fontWeight: 300 },
  },
  palette: {
    primary: { main: '#6B73FF' },
    secondary: { main: '#FF6B6B' },
  },
});

export default theme;
