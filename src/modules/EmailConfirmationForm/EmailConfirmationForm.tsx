import { useForm } from 'react-hook-form';
import {
  emailConfirmationSchema,
  EmailConfirmationSchema,
} from '@modules/EmailConfirmationForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';
import { Alert, Typography } from '@mui/material';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import { useActions } from '@shared/hooks';
import { useConfirmCodeMutation } from '@modules/EmailConfirmationForm/api';
import { errorMapper } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

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
  const [confirm, { isLoading, isError }] = useConfirmCodeMutation();
  const { setUserRegOrLogData } = useActions();

  const [errorText, setErrorText] = useState<string>('');

  const onSubmit = useCallback(async (data: EmailConfirmationSchema) => {
    const response = await confirm({
      email: JSON.parse(localStorage.getItem('temp-email')!),
      confirmation_code: data.code,
    });

    if (response.data) {
      localStorage.removeItem('temp-email');
      setUserRegOrLogData({
        id: response.data.data.id,
        name: response.data.data.name,
        email: response.data.data.email,
      });
      localStorage.setItem(
        'user_auth_token',
        JSON.stringify(response.data.data.token),
      );
    } else if (response.error && 'status' in response.error) {
      setErrorText(errorMapper(response.error.status as number));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2} justifyItems="center" alignItems="center">
        {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}

        {isError && (
          <Alert severity="error" variant="filled" sx={{ my: 2 }}>
            {errorText}
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
