import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@mui/material';
import { FC } from 'react';
import { BalanceInfoCardProps } from '@components/BalanceInfoCard/types.ts';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Stack from '@mui/material/Stack';
import PercentIcon from '@mui/icons-material/Percent';

const BalanceInfoCard: FC<BalanceInfoCardProps> = ({
  amount,
  created_at,
  cashback_percentage,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <CreditCardIcon />
                <Typography
                  variant="overline"
                  sx={{ fontSize: '7px', fontWeight: 'bold' }}
                >
                  Баланс
                </Typography>
              </Stack>
            </TableCell>
            <TableCell>{amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <EditCalendarIcon />
                <Typography
                  variant="overline"
                  sx={{ fontSize: '7px', fontWeight: 'bold' }}
                >
                  Створено
                </Typography>
              </Stack>
            </TableCell>
            <TableCell>{formatDate(created_at)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
                <PercentIcon />
                <Typography
                  variant="overline"
                  sx={{ fontSize: '7px', fontWeight: 'bold' }}
                >
                  Кешбек
                </Typography>
              </Stack>
            </TableCell>
            <TableCell>{cashback_percentage}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BalanceInfoCard;
