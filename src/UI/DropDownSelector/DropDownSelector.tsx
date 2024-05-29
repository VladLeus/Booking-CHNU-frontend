import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';

import { DropDownSelectorProps } from '@ui/DropDownSelector/types.ts';
import { FC } from 'react';

const DropDownSelector: FC<DropDownSelectorProps> = ({
  label,
  helperText,
  width,
  valuesArray,
  setValue,
  error,
}) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label={label}
      onChange={(event) => setValue(event.target.value)}
      // defaultValue={valuesArray[0]}
      helperText={helperText}
      error={error}
      size="small"
      sx={{ width: width }}
    >
      {valuesArray.map((option) => (
        <MenuItem sx={{ py: 0 }} key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default DropDownSelector;
