import { Home } from 'pages/Home';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';
import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from './RoutePath';

export interface ConfigRouteProps extends RouteProps {
  isProtected?: boolean;
}

export const routeConfig: Record<AppRoutes, ConfigRouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <Home />,
    isProtected: true,
  },
  [AppRoutes.SIGNIN]: {
    path: RoutePath.signin,
    element: <SignIn />,
    isProtected: false,
  },
  [AppRoutes.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignUp />,
    isProtected: false,
  },
};
