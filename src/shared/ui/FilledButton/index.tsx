import css from './FilledButton.module.scss';
import cn from 'classnames';
import { Button, ButtonProps } from '@mui/material';

type FilledButtonProps = ButtonProps;

export const FilledButton = (props: FilledButtonProps) => {
  return <Button className={cn(css.button)} {...props} />;
};
