import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import css from './SigninForm.module.scss';

interface SigninFormProps {
  className?: string;
}

export const SigninForm = ({ className }: SigninFormProps) => {
  const { t } = useTranslation('entry');
  return (
    <form className={classNames(css.form)}>
      <div className={classNames(css.form_group)}>
        <Input label={t('Email or phone')} />
        <div className={classNames(css.input_group)}>
          <Input label={t('Password')} type={'password'} />
          <Link component={RouterLink} to={'*'} underline={'hover'}>
            {t('Recover password')}
          </Link>
        </div>
      </div>

      <Button variant="contained" className={classNames(css.button)}>
        {t('Sign in')}
      </Button>
    </form>
  );
};
