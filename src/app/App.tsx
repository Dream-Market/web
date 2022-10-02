import './styles/index.scss';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import classNames from 'classnames';

export const App = () => {
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
