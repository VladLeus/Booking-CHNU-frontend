import { ChangeEvent } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { InputAdornment, TextField } from '@mui/material';
import { CustomInputProps } from './types';

const CustomInput = <T extends FieldValues>({
  name,
  control,
  label,
  type,
  variant,
  icon: Icon,
  error,
  helperText,
  value,
  setValue,
}: CustomInputProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          error={error}
          variant={variant}
          value={value}
          type={type || 'text'}
          helperText={helperText}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            field.onChange(event);
            setValue(event.target.value);
          }}
          InputProps={{
            startAdornment: Icon && (
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
