import { AppBar, Toolbar } from '@mui/material';
import classNames from 'classnames';
import { ReactNode } from 'react';
import css from './Header.module.scss';

interface HeaderProps {
  childrenRight?: ReactNode;
  childrenLeft?: ReactNode;
}

export const Header = (props: HeaderProps) => {
  const { childrenLeft, childrenRight } = props;

  return (
    <AppBar elevation={0}>
      <Toolbar className={classNames(css.toolbar)}>
        <div className={classNames(css.group)}>{childrenLeft}</div>
        <div className={classNames(css.group)}>{childrenRight}</div>
      </Toolbar>
    </AppBar>
  );
};
