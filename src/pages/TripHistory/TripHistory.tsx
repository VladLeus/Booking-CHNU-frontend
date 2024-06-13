import { Divider, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import UserApartamentsHistory from '@modules/UserApartamentsHistory';
import { useCallback, useState } from 'react';
import UserCarsHistory from '@modules/UserCarsHistory';

const TripHistory = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsModalActive(!isModalActive);
  }, [isModalActive]);

  return (
    <>
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

        {/*<UserApartamentsHistory/>*/}

        {!isModalActive && <UserApartamentsHistory handleClick={toggleModal} />}
        {isModalActive && <UserCarsHistory handleClick={toggleModal} />}
      </Stack>
    </>
  );
};

export default TripHistory;
