import { Alert } from '@mui/material';
import { FC } from 'react';
import CustomButton from '@ui/CustomButton';
import Stack from '@mui/material/Stack';
import { useGetUserCarsHistoryQuery } from '@modules/UserCarsHistory/api';
import CarsHistory from '@components/CarsHistory';
import { UserCarsHistoryResponse } from '@modules/UserCarsHistory/api/types.ts';

const UserCarsHistory: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  const {
    data: cars_history,
    isLoading,
    isError,
  } = useGetUserCarsHistoryQuery('');
  return (
    <>
      {isLoading && <Alert severity="info">Дані завантажуються...</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Інформація відсутня, спробуйте пізніше...
        </Alert>
      )}

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: 'column', gap: 3 }}
      >
        {cars_history?.data.map((cars_history: UserCarsHistoryResponse) => (
          <CarsHistory
            key={cars_history.id}
            id={cars_history.id}
            car_id={cars_history.car_id}
            start_date={cars_history.start_date}
            end_date={cars_history.end_date}
          />
        ))}
      </Stack>

      <Stack mt={1.2} alignItems="center" justifyContent="center">
        <CustomButton
          text={'Перейти до історії бронювання апартаментів'}
          variant={'outlined'}
          size={'small'}
          type={'button'}
          handleClick={handleClick}
          color={'primary'}
        />
      </Stack>
    </>
  );
};

export default UserCarsHistory;
