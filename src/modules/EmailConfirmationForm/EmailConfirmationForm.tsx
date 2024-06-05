import { useForm } from 'react-hook-form';
import {
  emailConfirmationSchema,
  EmailConfirmationSchema,
} from '@modules/EmailConfirmationForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { Alert, Typography } from '@mui/material';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useActions } from '@shared/hooks';
import { useConfirmCodeMutation } from '@modules/EmailConfirmationForm/api';

const EmailConfirmationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailConfirmationSchema>({
    mode: 'all',
    resolver: zodResolver(emailConfirmationSchema),
    defaultValues: {
      code: '',
    },
  });
  const navigate = useNavigate();
  const [confirm, { isLoading, isError }] = useConfirmCodeMutation();
  const { setUserRegData } = useActions();

  const onSubmit = useCallback(async (data: EmailConfirmationSchema) => {
    const response = await confirm({
      email: JSON.parse(localStorage.getItem('temp-email')!),
      confirmation_code: data.code,
    });

    if (response.data) {
      console.log(response.data);
      localStorage.removeItem('temp-email');
      setUserRegData(response.data.data.user);
      localStorage.setItem(
        'user_auth_token',
        JSON.stringify(response.data.data.token),
      );
      navigate('/home');
    } else if ('error' in response!) {
      console.log(response.error);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2} justifyItems="center" alignItems="center">
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
          Підтвердження електронної пошти
        </Typography>

        <CustomInput
          name="code"
          control={control}
          label="Введіть 6-ти значний код"
          variant="outlined"
          error={!!errors.code}
          helperText={errors.code?.message || ''}
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

export default EmailConfirmationForm;
