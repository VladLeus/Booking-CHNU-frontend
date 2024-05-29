import { useCallback, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, FormGroup } from '@mui/material';
import Typography from '@mui/material/Typography';
import DropDownSelector from '@ui/DropDownSelector';
import {
  handleClickShowPassword,
  handleMouseDownPassword,
} from '@modules/RegistrationForm/actions.ts';
import { GENDER } from '@modules/RegistrationForm/_data.ts';
import { useForm } from 'react-hook-form';
import {
  RegistrationSchema,
  registrationSchema,
} from './schema/registrationSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';

const RegistrationForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [sex, setSex] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onSubmit = useCallback(() => console.log('submit'), []);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    mode: 'all',
    resolver: zodResolver(registrationSchema),
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack justifyItems="center" alignItems="center">
        <FormGroup
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack gap={2}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 'bold', my: '5px' }}
            >
              Registration
            </Typography>
            <CustomInput
              name="firstName"
              control={control}
              label="Name"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName?.message || ''}
              value={firstName}
              setValue={setFirstName}
            />
            <CustomInput
              name="surname"
              control={control}
              label="Surname"
              variant="outlined"
              error={!!errors.surname}
              helperText={errors.surname?.message || ''}
              value={surname}
              setValue={setSurname}
            />
            <CustomInput
              name="email"
              control={control}
              type="email"
              label="Email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message || ''}
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              name="password"
              control={control}
              type="password"
              label="Password"
              variant="outlined"
              error={!!errors.password}
              helperText={errors.password?.message || ''}
              value={password}
              setValue={setPassword}
            />

            <DropDownSelector
              label={'Gender'}
              helperText={'Select your gender'}
              width={'220px'}
              valuesArray={GENDER}
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
            {/*
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
            />*/}

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
          </Stack>
        </FormGroup>
      </Stack>
    </LocalizationProvider>
  );
};

export default RegistrationForm;
