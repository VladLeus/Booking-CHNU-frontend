import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, loginFormSchema } from '@modules/LoginForm/schema';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useCallback, useState } from 'react';
import { Alert, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CustomButton from '@ui/CustomButton';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '@modules/LoginForm/api';

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [login, { isLoading, isError }] = useLoginMutation();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const onSubmit = useCallback(async (data: LoginFormSchema) => {
    console.log('submit', data);

    const response = await login({
      user: { email: data.email, password: data.password },
    });

    if ('data' in response) {
      console.log(data);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        gap={2}
        minWidth={300}
        maxWidth={400}
        sx={{ textWrap: 'wrap' }}
        alignItems="center"
        justifyItems="center"
      >
        {isLoading && (
          <Alert severity="info">
            Запит обробляється, зачекайте будь-ласка.
          </Alert>
        )}

        {isError && (
          <Alert severity="error" variant="filled" sx={{ my: 2 }}>
            Помилка підключення з сервером, спробуйте пізніше.
          </Alert>
        )}

        <Typography variant="h3" fontWeight="bold" component="h1">
          Вхід
        </Typography>
        <CustomInput
          name="email"
          control={control}
          label="Email"
          type="email"
          variant="outlined"
          icon={EmailOutlinedIcon}
          error={!!errors.email}
          helperText={errors.email?.message || ''}
        />
        <Stack
          gap={1}
          justifyItems="center"
          alignItems="left"
          minWidth={300}
          maxWidth={400}
        >
          <CustomInput
            name="password"
            control={control}
            label="Пароль"
            type={isPasswordVisible ? 'text' : 'password'}
            variant="outlined"
            icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
            error={!!errors.password}
            helperText={errors.password?.message || ''}
            handleIconClick={togglePasswordVisibility}
          />
          <Link to={'/forgot-password'}>
            <CustomButton
              type="button"
              text="Забули пароль?"
              variant="text"
              size="small"
              color="info"
            />
          </Link>
        </Stack>
        <CustomButton
          type="submit"
          text="Увійти"
          size="large"
          color="primary"
          variant="contained"
        />
      </Stack>
    </form>
  );
};

export default LoginForm;
