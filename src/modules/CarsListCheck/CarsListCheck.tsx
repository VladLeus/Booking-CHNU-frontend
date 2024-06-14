import { Alert, Box } from '@mui/material';
import { useGetAllCarsQuery } from '@modules/CarsListCheck/api/carsList.api.ts';
import CarRental from '@components/CarRental';
import { CarsListResponse } from '@modules/CarsListCheck/api/types.ts';
import Stack from '@mui/material/Stack';
import { LOADING_TEXT } from '@shared/constants';

const CarsListCheck = () => {
  const { data: cars, isLoading, isError } = useGetAllCarsQuery('');

  return (
    <Box>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Виникла помилка при завантаженні даних, спробуйте ще раз...
        </Alert>
      )}

      <Stack sx={{ flexDirection: 'column', gap: 3 }}>
        {cars?.data.map((car: CarsListResponse) => (
          <CarRental
            key={car.id}
            id={car.id}
            icon={car.image_url}
            carModel={car.model}
            seats={car.seats}
            transmissionType={car.transmission}
            manufactureYear={car.year}
            description={car.description}
            price={car.price}
            isLoading={isLoading}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CarsListCheck;
