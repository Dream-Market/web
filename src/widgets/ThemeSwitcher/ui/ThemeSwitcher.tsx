import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import classNames from 'classnames';
import css from './ThemeSwitcher.module.scss';
import { Button } from '@mui/material';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(css.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      variant={theme === Theme.DARK ? 'contained' : 'shadow'}
    >
      {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
