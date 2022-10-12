import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { AppLanguage, useLanguage } from 'app/providers/LanguageProvider';
import classNames from 'classnames';
import css from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const options = [
  {
    value: AppLanguage.EN,
    children: 'EN',
  },
  {
    value: AppLanguage.RU,
    children: 'RU',
  },
];

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { language, changeLanguage } = useLanguage();
  const changeLocale = (e: SelectChangeEvent<AppLanguage>) => {
    const lang = e.target.value;
    changeLanguage(lang as AppLanguage);
  };

  return (
    <Select
      id={'language'}
      label={language}
      defaultValue={language}
      className={classNames(css.languageSwitcher)}
      onChange={changeLocale}
    >
      {options.map((language, index) => (
        <MenuItem
          key={index}
          value={language.value}
          className={classNames(css.item)}
        >
          {language.children}
        </MenuItem>
      ))}
    </Select>
  );
};
