import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, loginFormSchema } from '@modules/LoginForm/schema.ts';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { useState } from 'react';

const LoginForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    mode: 'onBlur',
    resolver: zodResolver(loginFormSchema),
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <Stack gap={2} maxWidth={250} sx={{ textWrap: 'wrap' }}>
      <CustomInput
        name={'email'}
        control={control}
        label={'Email'}
        type={'email'}
        variant={'outlined'}
        icon={EmailOutlinedIcon}
        error={!!errors.email}
        helperText={errors.email?.message || ''}
        value={email}
        setValue={setEmail}
      />
      <CustomInput
        name={'password'}
        control={control}
        label={'Password'}
        type={'password'}
        variant={'outlined'}
        icon={VisibilityOffOutlinedIcon}
        error={!!errors.password}
        helperText={errors.password?.message || ''}
        value={password}
        setValue={setPassword}
      />
    </Stack>
  );
};

export default LoginForm;
