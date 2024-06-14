import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import { FC } from 'react';
import { UserProfileProps } from '@components/UserProfile/types.ts';

const UserProfile: FC<UserProfileProps> = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  birthdate,
  gender,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Ім'я</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{firstName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Прізвище</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{lastName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Номер телефону</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{phoneNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата народження</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{birthdate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Стать</TableCell>
              <TableCell sx={{ textAlign: 'right' }}>{gender}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UserProfile;
