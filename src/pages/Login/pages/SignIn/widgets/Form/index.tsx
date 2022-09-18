import { Link } from '@mui/material';
import cn from 'classnames';
import { SignInput } from 'pages/Login/ui';
import { FilledButton } from 'shared/ui/FilledButton';
import css from './Form.module.scss';

export const Form = () => {
  return (
    <form className={cn(css.form)}>
      <div className={cn(css.form_group)}>
        <SignInput placeholder='Email or phone' />
        <div className={cn(css.input_group)}>
          <SignInput placeholder='Password' />
          <Link>Recover password</Link>
        </div>
      </div>

      <FilledButton>Sign in</FilledButton>
    </form>
  );
};
