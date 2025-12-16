import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Provider } from 'react-redux';
import { store } from './Store/store.ts';
import { CssBaseline } from '@mui/material';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
