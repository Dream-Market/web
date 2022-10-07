import { Button, ButtonProps, Typography } from '@mui/material';
import classNames from 'classnames';
import css from './ButtonUnderlined.module.scss';

interface ButtonUnderlinedProps extends ButtonProps {
  className?: string;
}

export const ButtonUnderlined = ({
  className,
  children,
  ...props
}: ButtonUnderlinedProps) => {
  return (
    <Button
      className={classNames(css.buttonUnderlined, {}, [className])}
      variant={'text'}
      {...props}
    >
      <div className={classNames(css.buttonUnderlined_content)}>{children}</div>
      <Typography className={classNames(css.buttonUnderlined_underscore)} />
    </Button>
  );
};
