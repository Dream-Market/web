import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element, isProtected }) =>
          isProtected ? (
            <Route
              key={path}
              path={path}
              element={<ProtectedRoute>{element}</ProtectedRoute>}
            />
          ) : (
            <Route key={path} path={path} element={element} />
          )
        )}
      </Routes>
    </Suspense>
  );
};
