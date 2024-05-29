import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormSchema, loginFormSchema } from '@modules/LoginForm/schema';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useCallback, useState } from 'react';
import { FormGroup, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  return (
    <FormGroup>
      <Stack
        gap={2}
        minWidth={300}
        maxWidth={400}
        sx={{ textWrap: 'wrap' }}
        alignItems="center"
        justifyItems="center"
      >
        <Typography variant="h3" fontWeight="bold" component="h1">
          Login
        </Typography>
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
          name="password"
          control={control}
          label="Password"
          type={isPasswordVisible ? 'text' : 'password'}
          variant="outlined"
          icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
          error={!!errors.password}
          helperText={errors.password?.message || ''}
          value={password}
          setValue={setPassword}
          handleIconClick={togglePasswordVisibility}
        />
      </Stack>
    </FormGroup>
  );
};

export default LoginForm;
