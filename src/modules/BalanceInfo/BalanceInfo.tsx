//import { useAppSelector } from '@shared/hooks';
import BalanceInfoCard from '@components/BalanceInfoCard';
import { Alert } from '@mui/material';
import { useGetBallanceQuery } from '@modules/BalanceInfo/api';
import { LOADING_TEXT } from '@shared/constants';
// import { CarsListResponse } from "@modules/CarsListCheck/api/types.ts.ts";
// import CarRental from "@components/CarRental";
// import { BalanceInfoResponse } from "@modules/BalanceInfo/api/types.ts.ts";

const BalanceInfo = () => {
  //const user = useAppSelector((state) => state.user);
  const { data: wallet, isLoading, isError } = useGetBallanceQuery('');

  if (!wallet) {
    console.log(wallet);
    return <Alert severity="error">Помилка завантаження даних</Alert>;
  }

  return (
    <>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
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
