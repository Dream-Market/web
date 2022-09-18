import { Button, ButtonProps } from '@mui/material';
import cn from 'classnames';
import css from './UnderscoredButton.module.scss';

type UnderscoredButtonProps = ButtonProps;

export const UnderscoredButton = ({ children, ...props }: UnderscoredButtonProps) => {
  return (
    <Button className={cn(css.button)} {...props}>
      <div className={cn(css.button_content)}>{children}</div>
      <p className={cn(css.button_underscore)}></p>
    </Button>
  );
};
