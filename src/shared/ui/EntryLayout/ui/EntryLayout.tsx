import { Button, Link } from '@mui/material';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ButtonUnderlined } from 'shared/ui/ButtonUnderlined';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { ReactNode } from 'react';
import css from './EntryLayout.module.scss';
import { Header } from 'shared/ui/Header';
import { RoutePath } from 'shared/config/routeConfig';

interface EntryLayoutProps {
  children?: ReactNode;
}

export const EntryLayout = ({ children }: EntryLayoutProps) => {
  const { t } = useTranslation(['entry']);
  return (
    <>
      <Header
        childrenLeft={
          <>
            <Link component={RouterLink} to={'*'} underline={'none'}>
              {t('About')}
            </Link>
            <Link
              component={RouterLink}
              to={'*'} //TODO Contact link
              underline={'none'}
            >
              {t('Contact')}
            </Link>
          </>
        }
        childrenRight={
          <>
            <LanguageSwitcher />
            <Link
              component={RouterLink}
              to={RoutePath.signin}
              underline={'none'}
            >
              <ButtonUnderlined>{t('Sign in')}</ButtonUnderlined>
            </Link>

            <Link
              component={RouterLink}
              to={RoutePath.signup}
              underline={'none'}
            >
              <Button variant={'shadow'}>{t('Register')}</Button>
            </Link>
          </>
        }
      />
      <main className={classNames(css.main, {}, [css.container])}>
        {children}
      </main>
    </>
  );
};
