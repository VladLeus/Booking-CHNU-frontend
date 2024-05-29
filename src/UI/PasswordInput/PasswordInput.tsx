import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { PasswordInputProps } from './types.ts';
import { FC } from 'react';

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  value,
  setValue,
  showPassword,
  togglePasswordVisibility,
  setShowPassword,
  handleMouseDown,
}) => {
  return (
    <FormControl sx={{ width: '220px' }} size="small" variant="outlined">
      <InputLabel
        htmlFor="outlined-adornment-password-confirm"
        sx={{ width: 'auto' }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        id="outlined-adornment-password-confirm"
        type={showPassword ? 'text' : 'password'}
        label={label}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() =>
                togglePasswordVisibility(setShowPassword, !showPassword)
              }
              onMouseDown={handleMouseDown}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
