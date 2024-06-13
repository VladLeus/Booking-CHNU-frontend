import BalanceInfoCard from '@components/BalanceInfoCard';
import { Alert } from '@mui/material';
import { useGetBallanceQuery } from '@modules/BalanceInfo/api';

const BalanceInfo = () => {
  const { data: wallet, isLoading, isError } = useGetBallanceQuery('');

  if (!wallet) {
    return <Alert severity="error">Помилка завантаження даних</Alert>;
  }

  return (
    <>
      {isLoading && (
        <Alert severity="info">
          Дані завантажуються, будь ласка, зачекайте...
        </Alert>
      )}
      {isError && (
        <Alert variant="filled" severity="error">
          Помилка отримання даних, спробуйте ще раз пізніше.
        </Alert>
      )}
      <BalanceInfoCard
        id={wallet.data.id}
        user_id={wallet.data.user_id}
        amount={wallet.data.amount}
        created_at={wallet.data.created_at}
        cashback_percentage={wallet.data.cashback_percentage}
      />
    </>
  );
};

export default BalanceInfo;
