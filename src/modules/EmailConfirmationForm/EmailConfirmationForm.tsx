import { useForm } from 'react-hook-form';
import {
  emailConfirmationSchema,
  EmailConfirmationSchema,
} from '@modules/EmailConfirmationForm/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import CustomInput from '@ui/CustomInput';
import CustomButton from '@ui/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useActions } from '@hooks/actions.ts';

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

  const onSubmit = useCallback((data: EmailConfirmationSchema) => {
    console.log('submit', data);

    // Test confirmation
    const code: string = JSON.parse(localStorage.getItem('code')!);

    if (data.code === code) {
      setAuth(true);
      navigate('/home');
    } else {
      console.log('incorrect code');
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2} justifyItems="center" alignItems="center">
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
