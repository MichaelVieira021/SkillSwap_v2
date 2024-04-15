import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global"
import { SnackbarProvider } from 'notistack';
import { LoginProvider } from './contexts/LoginContext';
import AppRouter from './routes';
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <SnackbarProvider maxSnack={3} autoHideDuration={2000} preventDuplicate>
      <BrowserRouter>
        <LoginProvider>
          <AppRouter/>
        </LoginProvider>
      </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  )
}