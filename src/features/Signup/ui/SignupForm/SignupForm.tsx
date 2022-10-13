import { Button } from '@mui/material';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import css from './SignupForm.module.scss';

interface SignupFormProps {
  className?: string;
}

export const SignupForm = ({ className }: SignupFormProps) => {
  const { t } = useTranslation('entry');
  return (
    <form className={classNames(css.form)}>
      <div className={classNames(css.form_group)}>
        <Input label={t('Name')} />
        <Input label={t('Email')} type={'email'} />
        <Input label={t('Phone')} />
        <Input label={t('Password')} type={'password'} />
        <Input label={t('Confirm password')} type={'password'} />
      </div>

      <Button variant="contained" className={classNames(css.button)}>
        {t('Register')}
      </Button>
    </form>
  );
};
