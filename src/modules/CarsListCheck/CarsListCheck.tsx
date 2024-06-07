import { Alert, Box } from '@mui/material';
import { useGetAllCarsQuery } from '@modules/CarsListCheck/api/carsList.api.ts';
import CarRental from '@components/CarRental';
import { CarsListResponse } from '@modules/CarsListCheck/api/types.ts';
import Stack from '@mui/material/Stack';

const CarsListCheck = () => {
  const { data: cars, isLoading, isError } = useGetAllCarsQuery('');
  // console.log(cars.data);

  return (
    <Box>
      {isLoading && <Alert severity="info">Loading</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Error
        </Alert>
      )}

      <Stack sx={{ flexDirection: 'column', gap: 3 }}>
        {cars?.data.map((car: CarsListResponse) => (
          <CarRental
            id={car.id}
            icon={car.image_url}
            carModel={car.model}
            seats={car.seats}
            transmissionType={car.transmission}
            manufactureYear={car.year}
            // isPrepared={car.can_be_prepared}
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