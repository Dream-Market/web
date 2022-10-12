import { Container, Link, Typography } from '@mui/material';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EntryLayout } from 'shared/ui/EntryLayout';
import { SignupForm } from 'features/Signup';
import css from './SignUp.module.scss';
import { RoutePath } from 'shared/config/routeConfig';

interface SignUpProps {
  className?: string;
}

const SignUp = ({ className }: SignUpProps) => {
  const { t } = useTranslation(['entry']);

  return (
    <EntryLayout>
      <Container className={classNames(css.main)}>
        <div className={classNames(css.main_group)}>
          <Typography variant="h1" className={classNames(css.main_title)}>
            {t('Sign up to')}
            <br />
            {t('Dream Market')}
          </Typography>
          <div className={classNames(css.main_group)}>
            <Typography>{t('Already have an account')}?</Typography>
            <Link
              component={RouterLink}
              to={RoutePath.signin}
              underline={'hover'}
            >
              {t('Sign in')}
            </Link>
          </div>
        </div>

        <SignupForm />
      </Container>
    </EntryLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default SignUp;
