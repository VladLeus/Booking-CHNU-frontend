import {
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
} from '@modules/UserDataEdit/schema/userDataEditSchema.ts';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SingleDatePicker from '@ui/SingleDatePicker';
import DropDownSelector from '@ui/DropDownSelector';
import { GENDER } from '@modules/RegistrationForm/_data.ts';
import { useCallback } from 'react';
import { useAppSelector } from '@shared/hooks';
import dayjs from 'dayjs';

const UserDataEdit = () => {
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
      phone: user.phone,
      gender: user.gender,
      birthdate: dayjs(user.birthdate) || null,
    },
  });

  const onSubmit = useCallback(async () => {}, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          type={'button'}
          //handleClick={handleClick}
          color={'primary'}
        />

        <CustomButton
          text={'Скасувати'}
          variant={'outlined'}
          size={'small'}
          type={'button'}
          //handleClick={handleClick}
          color={'warning'}
        />
      </Stack>
    </form>
  );
};

export default UserDataEdit;
