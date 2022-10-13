import { TextField, TextFieldProps } from '@mui/material';

export const Input = ({ ...props }: TextFieldProps) => {
  return (
    <TextField
      variant="filled"
      InputProps={{
        disableUnderline: true,
      }}
      {...props}
    />
  );
};
