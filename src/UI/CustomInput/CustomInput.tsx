import { ChangeEvent, FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';
import { CustomInputProps } from './types.ts';

const CustomInput: FC<CustomInputProps> = ({
  name,
  control,
  label,
  variant,
  icon: Icon,
  error,
  helperText,
  value,
  setValue,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={value}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={error}
          variant={variant}
          helperText={helperText}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            field.onChange(event);
            setValue(event.target.value);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default CustomInput;
