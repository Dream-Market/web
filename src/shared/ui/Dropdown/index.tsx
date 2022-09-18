import { FormControl, Select } from '@mui/material';
import cn from 'classnames';
import { ReactNode } from 'react';
import css from './Dropdown.module.scss';

type DropdownProps = {
  id: string;
  label?: string;
  value?: string;
  children?: ReactNode;
};

export const Dropdown = ({ id, label, value, children }: DropdownProps) => {
  return (
    <FormControl>
      <Select id={id} label={label} value={value ?? ''} className={cn(css.dropdown)}>
        {children}
      </Select>
    </FormControl>
  );
};
