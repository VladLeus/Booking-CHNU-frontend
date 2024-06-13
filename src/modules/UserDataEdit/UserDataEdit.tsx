import {
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import CustomButton from '@ui/CustomButton';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  userDataEditSchema,
  UserDataEditSchema,
} from './schema/userDataEditSchema.ts';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SingleDatePicker from '@ui/SingleDatePicker';
import DropDownSelector from '@ui/DropDownSelector';
import { GENDER } from '@modules/RegistrationForm/_data.ts';
import { FC, useCallback, useEffect, useState } from 'react';
import { useActions, useAppSelector } from '@shared/hooks';
import dayjs from 'dayjs';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useProfileEditMutation } from './api/userDataEdit.api.ts';
import { UserInfoEdit, UserInfoEditRequest } from './api/types.ts';
import { UserInfoAfterEdit } from '@shared/store/user/types.ts';

const UserDataEdit: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const { user } = useAppSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataEditSchema>({
    mode: 'all',
    resolver: zodResolver(userDataEditSchema),
    defaultValues: {
      name: user.name,
      surname: user.surname,
      email: user.email,
      phone: user.phone?.slice(3) ?? '',
      gender: user.gender,
      birthdate: dayjs(user.birthdate) || null,
      current_password: '',
      new_password: null,
      new_password_confirmation: null,
    },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible(!isPasswordVisible);
  }, [isPasswordVisible]);

  const [profileEdit, { isLoading, isError }] = useProfileEditMutation();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [updatedUserProfile, setUpdatedUserProfile] =
    useState<UserInfoAfterEdit>();

  const { updateUserProfile } = useActions();

  const onSubmit = useCallback(async (data: UserDataEditSchema) => {
    const userInfo: UserInfoEdit = {
      email: data.email,
      name: data.name,
      last_name: data.surname,
      phone_number: '+38' + data.phone,
      gender: data.gender,
      birthdate: data.birthdate?.toString() || '',
      current_password: data.current_password,
      new_password: !data.new_password ? '' : data.new_password,
      new_password_confirmation: !data.new_password_confirmation
        ? ''
        : data.new_password_confirmation,
    };

    const userUpdateDTO: UserInfoEditRequest = {
      user: userInfo,
      token: JSON.parse(localStorage.getItem('user_auth_token')!),
    };

    console.log(userUpdateDTO);
    const response = await profileEdit(userUpdateDTO);

    if (response.data) {
      console.log(response.data);
      setUpdatedUserProfile({
        email: response.data.data.email,
        name: response.data.data.name,
        last_name: response.data.data.last_name,
        phone_number: response.data.data.phone_number,
        gender: response.data.data.gender,
        birthdate: response.data.data.birthdate,
      });
      setIsSuccess(true);
      console.log('Ви успішно змінили дані' + response.data?.data);
      handleClick();
    } else if ('error' in response!) {
      console.log(response.error);
    }
  }, []);

  useEffect(() => {
    if (isSuccess) {
      updateUserProfile(updatedUserProfile!);
    }
  }, [updatedUserProfile, isSuccess]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading && (
        <Alert severity="info">Запит обробляється, зачекайте будь-ласка.</Alert>
      )}

      {isError && (
        <Alert severity="error" variant="filled" sx={{ my: 2 }}>
          Помилка підключення з сервером, спробуйте пізніше.
        </Alert>
      )}

      {isSuccess && <Alert severity="info">Ви успішно змінили дані!</Alert>}

      <TableContainer component={Paper} sx={{ mb: 1.4 }}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Ім'я</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <CustomInput
                  name="name"
                  control={control}
                  label="Ім'я"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name?.message || ''}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Прізвище</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <CustomInput
                  name="surname"
                  control={control}
                  label="Прізвище"
                  variant="outlined"
                  error={!!errors.surname}
                  helperText={errors.surname?.message || ''}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <CustomInput
                  name="email"
                  control={control}
                  type="email"
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message || ''}
                  icon={EmailOutlinedIcon}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Номер телефону</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <CustomInput
                  name="phone"
                  control={control}
                  type="tel"
                  label="Номер телефону"
                  variant="outlined"
                  error={!!errors.phone}
                  helperText={errors.phone?.message || ''}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата народження</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <SingleDatePicker
                  name="birthdate"
                  control={control}
                  label="Дата народження"
                  disableFuture={true}
                  error={!!errors.birthdate}
                  helperText={errors.birthdate?.message || ''}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Стать</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <DropDownSelector
                  name="gender"
                  control={control}
                  label="Оберіть стать"
                  valuesArray={GENDER}
                  error={!!errors.gender}
                  helperText={errors.gender?.message || ''}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Поточний пароль</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <CustomInput
                  name="current_password"
                  control={control}
                  type={isPasswordVisible ? 'text' : 'password'}
                  label="Пароль"
                  variant="outlined"
                  error={!!errors.current_password}
                  helperText={errors.current_password?.message || ''}
                  icon={isPasswordVisible ? VisibilityIcon : VisibilityOffIcon}
                  handleIconClick={togglePasswordVisibility}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Stack
        mb={3}
        flexDirection={'row'}
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <CustomButton
          text={'Зберегти'}
          variant={'outlined'}
          size={'small'}
          type={'submit'}
          color={'primary'}
        />

        <CustomButton
          text={'Скасувати'}
          variant={'outlined'}
          size={'small'}
          type={'button'}
          handleClick={handleClick}
          color={'warning'}
        />
      </Stack>
    </form>
  );
};

export default UserDataEdit;
