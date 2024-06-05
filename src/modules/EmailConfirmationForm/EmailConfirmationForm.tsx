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
      code: undefined,
    },
  });
  const navigate = useNavigate();
  const { setAuth } = useActions();
  const [confirm, { isLoading, isError }] = useConfirmCodeMutation();

  const onSubmit = useCallback(async (data: EmailConfirmationSchema) => {
    const response = confirm({ code: data.code });

    if ('data' in response) {
      console.log(response.data);
      //navigate('/home');
    } else if ('error' in response) {
      console.log('incorrect code');
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
