import { Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomInput from '@ui/CustomInput';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import CustomButton from '@ui/CustomButton';
import {
  passwordResetSchema,
  PasswordResetSchema,
} from '@modules/PasswordResetForm/schema';

const PasswordResetForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordResetSchema>({
    mode: 'all',
    resolver: zodResolver(passwordResetSchema),
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  });

  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const onSubmit = useCallback((data: PasswordResetSchema) => {
    console.log('submit', data);
    localStorage.removeItem('resetJWT');
    navigate('/login');
  }, []);

  const theme: Theme = useTheme();
  const isSmScreen: boolean = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        gap={2}
        justifyItems="center"
        alignItems="center"
        maxWidth={450}
        minWidth={350}
        width={isSmScreen ? 450 : 300}
      >
        <Typography variant="h3" fontWeight="bold" component="h1">
          Зміна паролю
        </Typography>
        <CustomInput
          name="password"
          control={control}
          type={isPasswordVisible ? 'text' : 'password'}
          label="Пароль"
          variant="outlined"
          error={!!errors.password}
          helperText={errors.password?.message || ''}
          icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
          handleIconClick={togglePasswordVisibility}
        />
        <CustomInput
          name="passwordConfirmation"
          control={control}
          type={isPasswordVisible ? 'text' : 'password'}
          label="Підтвердіть пароль"
          variant="outlined"
          error={!!errors.passwordConfirmation}
          helperText={errors.passwordConfirmation?.message || ''}
          icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
          handleIconClick={togglePasswordVisibility}
        />
        <CustomButton
          type="submit"
          text="Підтвердити"
          size="large"
          color="primary"
          variant="contained"
        />
      </Stack>
    </form>
  );
};

export default PasswordResetForm;
