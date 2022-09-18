import { ReactNode } from 'react';
import css from './Layout.module.scss';
import cn from 'classnames';
import { AppBar, Container, Toolbar } from '@mui/material';

type LayoutProps = {
  header?: ReactNode;
  main?: ReactNode;
  footer?: ReactNode;
};

export const Layout = ({ header, main, footer }: LayoutProps) => {
  return (
    <Container className={cn(css.container)}>
      <AppBar position='static' elevation={0}>
        <Toolbar className={cn(css.navbar)}>{header}</Toolbar>
      </AppBar>

      <main className={cn(css.main)}>{main}</main>

      <footer className={cn(css.footer)}>{footer}</footer>
    </Container>
  );
};
