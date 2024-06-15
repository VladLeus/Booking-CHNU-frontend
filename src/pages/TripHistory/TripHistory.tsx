import { Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import UserCarsHistory from '@modules/UserCarsHistory';
import UserApartmentsHistory from '@modules/UserApartmentsHistory';
import { useAppSelector } from '@shared/hooks';

const TripHistory = () => {
  const { isApartmentsHistoryActive } = useAppSelector(
    (state) => state.appState,
  );

  return (
    <Stack direction="column" gap={1} sx={{ mt: 5 }}>
      <Typography
        sx={{
          textAlign: 'left',
          fontWeight: 'bold',
        }}
        color="text.primary"
        variant="h4"
      >
        Історія бронювань
      </Typography>

      <Typography
        sx={{
          textAlign: 'left',
          fontWeight: 'medium',
        }}
        color="text.secondary"
        variant="body1"
      >
        Тут ви можете переглянути історію бронювань
      </Typography>
      <Divider />

      {isApartmentsHistoryActive ? <UserApartmentsHistory /> : <UserCarsHistory />  }
    </Stack>
  );
};

export default TripHistory;
