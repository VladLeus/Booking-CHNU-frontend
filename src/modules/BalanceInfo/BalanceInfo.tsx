import { useAppSelector } from '@shared/hooks';
import BalanceInfoCard from '@components/BalanceInfoCard';
import { Alert } from '@mui/material';
import { useGetBallanceQuery } from '@modules/BalanceInfo/api';
// import { CarsListResponse } from "@modules/CarsListCheck/api/types.ts";
// import CarRental from "@components/CarRental";
// import { BalanceInfoResponse } from "@modules/BalanceInfo/api/types.ts";

const BalanceInfo = () => {
  const user = useAppSelector((state) => state.user);
  const {
    data: wallet,
    isLoading,
    isError,
  } = useGetBallanceQuery({ user_id: user.user.id! });

  if (!wallet) {
    console.log(wallet);
    return <Alert severity="error">Помилка завантаження даних</Alert>;
  }

  // if(wallet.error) {
  //   console.log(wallet.error);
  // }

  return (
    <>
      {isLoading && <Alert severity="info">Loading...</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Error fetching balance information.
        </Alert>
      )}

      {/*<p>User ID: {user.user.id}</p>*/}
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
