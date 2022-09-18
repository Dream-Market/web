import { LoginLayout } from 'pages/Login/ui';
import { Main } from './widgets/Main';

export const SignIn = () => {
  return <LoginLayout main={<Main />} />;
};
