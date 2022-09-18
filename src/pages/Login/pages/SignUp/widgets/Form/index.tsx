import cn from 'classnames';
import { SignInput } from 'pages/Login/ui';
import { FilledButton } from 'shared/ui/FilledButton';
import css from './Form.module.scss';

export const Form = () => {
  return (
    <form className={cn(css.form)}>
      <div className={cn(css.form_group)}>
        <SignInput placeholder='Name' />
        <SignInput placeholder='Email' />
        <SignInput placeholder='Phone' />
        <SignInput placeholder='Password' />
        <SignInput placeholder='Confirm password' />
      </div>

      <FilledButton>Register</FilledButton>
    </form>
  );
};
