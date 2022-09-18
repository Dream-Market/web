import css from './SignInput.module.scss';
import cn from 'classnames';

type SignInputProps = {
  placeholder?: string;
};

export const SignInput = ({ placeholder }: SignInputProps) => {
  return <input className={cn(css.input)} placeholder={placeholder} />;
};
