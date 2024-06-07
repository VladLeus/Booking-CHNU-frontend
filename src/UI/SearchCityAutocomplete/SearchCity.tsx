import { Controller, FieldValues } from 'react-hook-form';
import { CustomAutoCompleteProps } from '@ui/SearchCityAutocomplete/types.ts';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';

const SearchCity = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  error,
  helperText,
  icon: Icon,
  handleChange,
}: CustomAutoCompleteProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          {...field}
          onChange={(_, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(event) => handleChange(event)}
              label={label}
              error={error}
              helperText={helperText}
              InputProps={{
                startAdornment: Icon && (
                  <InputAdornment position="start">
                    <Icon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          options={options}
        />
      )}
    />
  );
};

export default SearchCity;
