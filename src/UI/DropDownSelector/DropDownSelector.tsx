import MenuItem from '@mui/material/MenuItem';
import { InputAdornment, TextField } from '@mui/material';
import { DropDownSelectorProps } from '@ui/DropDownSelector/types.ts';
import { Controller, FieldValues } from 'react-hook-form';

const DropDownSelector = <T extends FieldValues>({
  name,
  control,
  label,
  valuesArray,
  error,
  helperText,
  icon: Icon,
}: DropDownSelectorProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          select
          label={label}
          defaultValue={valuesArray[0]}
          helperText={helperText}
          error={error}
          fullWidth={true}
          InputProps={{
            startAdornment: Icon && (
              <InputAdornment position="start">
                <Icon />
              </InputAdornment>
            ),
          }}
        >
          {valuesArray.map((option: string) => (
            <MenuItem sx={{ py: 0 }} key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    ></Controller>
  );
};

export default DropDownSelector;
