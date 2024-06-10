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
          options={options}
          fullWidth={true}
          getOptionLabel={(option) => option}
          isOptionEqualToValue={(option, value) => option === value}
          onChange={(_, value) => field.onChange(value)}
          sx={{ minWidth: 250 }}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={(event) => {
                field.onChange(event);
                handleChange(event);
              }}
              label={label}
              error={error}
              helperText={helperText}
              variant="standard"
              InputProps={{
                ...params.InputProps,
                startAdornment: Icon && (
                  <InputAdornment position="start">
                    <Icon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      )}
    />
  );
};

export default SearchCity;
