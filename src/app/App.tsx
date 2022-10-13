import './styles/index.scss';
import { Suspense } from 'react';
import { AppRouter } from './providers/Router';
import classNames from 'classnames';
import { CircularProgress } from '@mui/material';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

export const App = () => {
  return (
    <div className={classNames('app')}>
      <Suspense fallback={<CircularProgress />}>
        <AppRouter />
        <ThemeSwitcher />
      </Suspense>
    </div>
  );
};
