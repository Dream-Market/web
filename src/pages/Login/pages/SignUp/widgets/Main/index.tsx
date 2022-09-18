import { Link } from '@mui/material';
import cn from 'classnames';
import css from './Main.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import { routes } from 'shared/routes';
import { Form } from '../Form';

export const Main = () => {
  return (
    <div className={cn(css.main)}>
      <div className={cn(css.main_group)}>
        <h1 className={cn(css.main_title)}>
          Sign up to
          <br />
          Dream Market
        </h1>
        <div className={cn(css.main_group)}>
          <span className={cn(css.main_text)}>Already have an account?</span>
          <Link className={cn(css.main_link)} component={RouterLink} to={routes.signIn}>
            Sign in
          </Link>
        </div>
      </div>
      <Form />
    </div>
  );
};