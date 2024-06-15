import ApartmentsHistory from 'components/ApartmentsHistory';
import { useGetUserApartamentsHistoryQuery } from './api';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { UserApartamentsHistoryResponse } from './api/types.ts';
import CustomButton from '@ui/CustomButton';
import { LOADING_TEXT } from '@shared/constants';
import { useActions } from '@shared/hooks';

const UserApartmentsHistory = () => {
  const {
    data: apartments,
    isLoading,
    isError,
  } = useGetUserApartamentsHistoryQuery('');
  const { switchHistories } = useActions();

  return (
    <>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Інформація відсутня, спробуйте пізніше...
        </Alert>
      )}

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: 'column', gap: 2 }}
      >
        {apartments?.data.map((apartaments: UserApartamentsHistoryResponse) => (
          <ApartmentsHistory
            key={apartaments.id}
            id={apartaments.id}
            apartment_id={apartaments.apartment_id}
            start_date={apartaments.start_date}
            end_date={apartaments.end_date}
          />
        ))}
      </Stack>

      <Stack mt={1.2} alignItems="center" justifyContent="center">
        <CustomButton
          text="Перейти до історії бронювання машин"
          variant="outlined"
          size="small"
          type="button"
          handleClick={() => switchHistories()}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default UserApartmentsHistory;
