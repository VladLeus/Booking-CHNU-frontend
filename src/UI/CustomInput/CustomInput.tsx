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
  handleIconClick,
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
          type={type || 'text'}
          helperText={helperText}
          fullWidth={true}
          InputProps={{
            startAdornment: Icon && (
              <InputAdornment position="start">
                <Icon onClick={handleIconClick} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default CustomInput;
