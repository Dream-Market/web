import { Button, Link } from '@mui/material';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { ButtonUnderlined } from 'shared/ui/ButtonUnderlined';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { Link as RouterLink } from 'react-router-dom';
import { ReactNode } from 'react';
import { routeConfig } from 'shared/config/routeConfig';
import { useNavigateTo } from 'shared/lib/hooks';
import css from './EntryLayout.module.scss';
import { Header } from 'shared/ui/Header';

interface EntryLayoutProps {
  children?: ReactNode;
}

export const EntryLayout = ({ children }: EntryLayoutProps) => {
  const { t } = useTranslation(['entry']);
  const toSignIn = useNavigateTo(routeConfig.signin.path);
  const toSignUp = useNavigateTo(routeConfig.signup.path);
  return (
    <>
      <Header
        childrenLeft={
          <>
            <Link component={RouterLink} to={'*'} underline={'hover'}>
              {t('About')}
            </Link>
            <Link
              component={RouterLink}
              to={'*'} //TODO Contact link
              underline={'hover'}
            >
              {t('Contact')}
            </Link>
          </>
        }
        childrenRight={
          <>
            <LanguageSwitcher />
            <ButtonUnderlined onClick={toSignIn}>
              {t('Sign in')}
            </ButtonUnderlined>
            <Button variant={'shadow'} onClick={toSignUp}>
              {t('Register')}
            </Button>
          </>
        }
      />
      <main className={classNames(css.main, {}, [css.container])}>
        {children}
      </main>
    </>
  );
};
