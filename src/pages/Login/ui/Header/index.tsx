import { Link, MenuItem } from '@mui/material';
import cn from 'classnames';
import { useNavigateTo } from 'shared/hooks';
import { routes } from 'shared/routes';
import { Dropdown } from 'shared/ui/Dropdown';
import { ShadowButton } from 'shared/ui/ShadowButton';
import { UnderscoredButton } from 'shared/ui/UnderscoredButton';
import css from './Header.module.scss';
import { Link as RouterLink } from 'react-router-dom';

const languages = ['English', 'Russian'];
const chosenLanguage = languages[0];

export const Header = () => {
  const toSignIn = useNavigateTo(routes.signIn);
  const toSignUp = useNavigateTo(routes.signUp);

  return (
    <>
      <div className={cn(css.group)}>
        <Link className={cn(css.group_link)} component={RouterLink} to={routes.any}>
          About
        </Link>
        <Link className={cn(css.group_link)} component={RouterLink} to={routes.any}>
          Contact
        </Link>
      </div>
      <div className={cn(css.group)}>
        <Dropdown id={'language'} label={chosenLanguage} value={chosenLanguage}>
          {languages.map((language, index) => (
            <MenuItem key={index} value={language}>
              {language}
            </MenuItem>
          ))}
        </Dropdown>
        <UnderscoredButton onClick={toSignIn}>Sign in</UnderscoredButton>
        <ShadowButton onClick={toSignUp}>Register</ShadowButton>
      </div>
    </>
  );
};
