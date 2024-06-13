import { useForm } from 'react-hook-form';
import {
  ForgotPasswordFormSchema,
  forgotPasswordSchema,
} from '@modules/ForgotPasswordForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SendIcon from '@mui/icons-material/Send';
import { Alert, Typography, useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useForgotPasswordMutation } from '@modules/ForgotPasswordForm/api';
import { errorMapper } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

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

  const [errorText, setErrorText] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const onSubmit = useCallback(async (data: ForgotPasswordFormSchema) => {
    const response = await getResetLink({ email: data.email });

    if (response.data) {
      console.log(response.data.data.reset_password_url);
      setIsSuccess(true);
    } else if (response.error && 'status' in response.error) {
      setErrorText(errorMapper(response.error.status));
    }
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
        {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}

        {isError && (
          <Alert severity="error" variant="filled" sx={{ my: 2 }}>
            {errorText}
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

        {isSuccess && (
          <Alert severity="info">
            Вам на email було надіслано посилання для скидання паролю
          </Alert>
        )}
      </Stack>
    </form>
  );
};

export default ForgotPasswordForm;
