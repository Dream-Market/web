import { Button, ButtonProps } from '@mui/material';
import cn from 'classnames';
import css from './ShadowButton.module.scss';

type ShadowButtonProps = ButtonProps;

export const ShadowButton = (props: ShadowButtonProps) => {
  return <Button className={cn(css.button)} {...props} />;
};
