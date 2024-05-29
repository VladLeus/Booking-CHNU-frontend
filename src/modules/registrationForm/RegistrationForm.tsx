import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Box from '@mui/material/Box';
import { Button, FormGroup, InputAdornment, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import DropDownSelector from '@ui/DropDownSelector';
import PasswordInput from '@ui/PasswordInput';
import {
  handleClickShowPassword,
  handleMouseDownPassword,
} from '@modules/registrationForm/actions.ts';
import { gender } from '@modules/registrationForm/_data.tsx';
import { useForm } from 'react-hook-form';
import { Schema, schema } from './schema.ts';
import { zodResolver } from '@hookform/resolvers/zod';

const RegistrationForm = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormGroup
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', mb: '10px' }}
          >
            Registration
          </Typography>

          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 1,
              gap: 2,
            }}
          >
            <TextField
              label="First name"
              id="outlined-size-small"
              size="small"
              sx={{ width: '220px' }}
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />

            <TextField
              label="Second name"
              id="outlined-size-small"
              size="small"
              sx={{ width: '220px' }}
              {...register('secondName')}
              error={!!errors.secondName}
              helperText={errors.secondName?.message}
            />

            <TextField
              label="Phone number"
              id="outlined-start-adornment"
              placeholder="Your phone number"
              size="small"
              sx={{ width: '220px' }}
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+380</InputAdornment>
                ),
              }}
            />

            <TextField
              id="outlined-basic"
              label="Your mail"
              placeholder="example@gmail.com"
              size="small"
              sx={{ width: '220px' }}
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            <DropDownSelector
              label={'Gender'}
              helperText={'Select your gender'}
              width={'220px'}
              valuesArray={gender}
              setValue={setSex}
              {...register('gender')}
              error={!!errors.gender}
            />

            <DatePicker
              label="Birth Date"
              slotProps={{
                textField: { size: 'small', sx: { width: '220px' } },
              }}
            />

            <PasswordInput
              label={'Password'}
              key={1}
              value={password}
              setValue={setPassword}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              togglePasswordVisibility={handleClickShowPassword}
              handleMouseDown={handleMouseDownPassword}
            />

            <PasswordInput
              label={'Confirm password'}
              value={passwordConfirm}
              key={2}
              setValue={setPasswordConfirm}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              togglePasswordVisibility={handleClickShowPassword}
              handleMouseDown={handleMouseDownPassword}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              borderRadius: 5,
              backgroundColor: 'rgba(0, 125, 255, 0.8)',
            }}
          >
            Sign up
          </Button>
        </FormGroup>
      </Box>
    </LocalizationProvider>
  );
};

export default RegistrationForm;
