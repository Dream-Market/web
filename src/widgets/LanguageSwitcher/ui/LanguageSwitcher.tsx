import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import css from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const options = [
  {
    value: 'en',
    text: 'en',
  },
  {
    value: 'ru',
    text: 'ru',
  },
];

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const changeLocale = (e: SelectChangeEvent<string>) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
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
          {language.text}
        </MenuItem>
      ))}
    </Select>
  );
};
