import { Container, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SigninForm } from 'features/Signin';
import { EntryLayout } from 'shared/ui/EntryLayout';
import { Link as RouterLink } from 'react-router-dom';
import classNames from 'classnames';
import css from './SignIn.module.scss';
import { RoutePath } from 'shared/config/routeConfig';

interface SignInProps {
  className?: string;
}

const SignIn = ({ className }: SignInProps) => {
  const { t } = useTranslation(['entry']);

  return (
    <EntryLayout>
      <Container className={classNames(css.main)}>
        <div className={classNames(css.main_group)}>
          <Typography variant="h1" className={classNames(css.main_title)}>
            {t('Sign in to')}
            <br />
            {t('Dream Market')}
          </Typography>
          <div className={classNames(css.main_group)}>
            <Typography>{t('No account')}?</Typography>
            <Link
              component={RouterLink}
              to={RoutePath.signup}
              underline={'hover'}
            >
              {t('Register')}
            </Link>
          </div>
        </div>

        <SigninForm />
      </Container>
    </EntryLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default SignIn;
