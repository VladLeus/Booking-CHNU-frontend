import BalanceInfo from '@modules/BalanceInfo/BalanceInfo.tsx';
import { Typography } from '@mui/material';

const Wallet = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          color: 'text.primary',
          fontWeight: 'bold',
        }}
      >
        Ваші бонуси та кешбек
      </Typography>

      <BalanceInfo />
    </>
  );
};

export default Wallet;
