import { Main } from 'pages/Main';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from 'shared/routes';
import './styles/index.scss';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.signIn} element={<SignIn />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path={routes.any} element={<>Error</>} />
    </Routes>
  </BrowserRouter>
);
