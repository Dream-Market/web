import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';

type ProtectedRouteProps = {
  children?: ReactNode;
};

export const ProtectedRoute = ({
  children,
}: ProtectedRouteProps): JSX.Element => {
  const location = useLocation();
  const isAuthenticated = false; // TODO Add hook useAuth()

  if (!isAuthenticated) {
    return (
      <Navigate
        to={routeConfig.signin.path}
        state={{ from: location }}
        replace
      />
    );
  }

  return children as JSX.Element;
};
