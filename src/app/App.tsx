import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { SignIn, SignUp } from 'pages/Login';
import { Main } from 'pages/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'shared/routes';
import { ProtectedRoute } from 'shared/ui/ProtectedRoute';
import './styles/index.scss';
import { theme } from './styles/themes/theme';

export const App = () => (
  <BrowserRouter>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path={routes.main}
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />
          <Route path={routes.signIn} element={<SignIn />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path={routes.any} element={<>Error</>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
