import { useForm } from 'react-hook-form';
import {
  ForgotPasswordFormSchema,
  forgotPasswordSchema,
} from '@modules/ForgotPasswordForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendIcon from '@mui/icons-material/Send';
import { Alert, Typography, useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useForgotPasswordMutation } from '@modules/ForgotPasswordForm/api';

const ForgotPasswordForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormSchema>({
    mode: 'all',
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });
  const [getResetLink, { isLoading, isError }] = useForgotPasswordMutation();

  const onSubmit = useCallback(async (data: ForgotPasswordFormSchema) => {
    const response = await getResetLink({ email: data.email });

    if (response.data) {
      console.log(response.data.data.reset_password_url);
    } else if ('error' in response) {
      console.log(response.error);
    }

    // Test logging
    // console.log(`http://localhost:5173/password/reset/edit?token=test`);
  }, []);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        gap={2}
        justifyItems="center"
        alignItems="center"
        textAlign="center"
        minWidth={300}
        maxWidth={600}
        width={isSmScreen ? 600 : 300}
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

        <Typography
          variant={isSmScreen ? 'h3' : 'h4'}
          fontWeight="bold"
          component="h1"
        >
          Відновлення паролю
        </Typography>
        <Typography variant="body2" fontWeight="normal" component="p">
          Введіть електронну адресу для підтвердження зміни паролю.
        </Typography>
        <CustomInput
          name="email"
          control={control}
          label="Email"
          variant="outlined"
          error={!!errors.email}
          helperText={errors.email?.message || ''}
          icon={EmailOutlinedIcon}
        />
        <CustomButton
          type="submit"
          text="Надіслати"
          size="medium"
          color="primary"
          variant="contained"
          icon={SendIcon}
        />
      </Stack>
    </form>
  );
};

export default ForgotPasswordForm;
