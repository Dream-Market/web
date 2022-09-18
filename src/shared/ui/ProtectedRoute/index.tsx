import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from 'shared/routes';

type Props = {
  children?: ReactNode;
};

export const ProtectedRoute = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const isAuthenticated = false; // TODO Add hook useAuth()

  if (!isAuthenticated) {
    return <Navigate to={routes.signIn} state={{ from: location }} replace />;
  }

  return children as JSX.Element;
};
