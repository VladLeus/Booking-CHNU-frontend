import ApartamentsHistory from '@components/ApartamentsHistory';
import { useGetUserApartamentsHistoryQuery } from '@modules/UserApartamentsHistory/api';
import { Alert } from '@mui/material';
import Stack from '@mui/material/Stack';
import { UserApartamentsHistoryResponse } from '@modules/UserApartamentsHistory/api/types.ts';
import CustomButton from '@ui/CustomButton';
import { FC } from 'react';

const UserApartamentsHistory: FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  const {
    data: apartaments,
    isLoading,
    isError,
  } = useGetUserApartamentsHistoryQuery('');

  return (
    <>
      {isLoading && <Alert severity="info">Дані завантажуються...</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Інформація відсутня, спробуйте пізніше...
        </Alert>
      )}

      <Stack sx={{ flexDirection: 'column', gap: 3 }}>
        {apartaments?.data.map(
          (apartaments: UserApartamentsHistoryResponse) => (
            <ApartamentsHistory
              key={apartaments.id}
              id={apartaments.id}
              apartment_id={apartaments.apartment_id}
              start_date={apartaments.start_date}
              end_date={apartaments.end_date}
            />
          ),
        )}
      </Stack>

      <Stack mt={1.4} alignItems="center" justifyContent="center">
        <CustomButton
          text={'Перейти до історії бронювання машин'}
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

export default UserApartamentsHistory;
