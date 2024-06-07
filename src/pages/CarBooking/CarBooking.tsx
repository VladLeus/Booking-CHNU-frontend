import { Alert, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
//import { Box } from "@mui/material";
import { useGetAllCarsQuery } from '@modules/CarsListCheck/api/carsList.api.ts';
//import { Skeleton } from "@mui/material";
import CarInfo from '@components/CarInfo';
import Stack from '@mui/material/Stack';
import CarBookingForm from '@modules/CarBookingForm/CarBookingForm.tsx';

const CarBooking = () => {
  const { id } = useParams();
  const { data: car, isLoading, isError } = useGetAllCarsQuery(id || '');

  const car_id = Number(id);

  if (isError || !car || !car.data || car.data.length === 0) {
    return <Typography>Error loading car information</Typography>;
  }

  const carData = car.data[car_id - 1];

  return (
    <>
      {isLoading && <Alert severity="info">Loading</Alert>}
      {isError && (
        <Alert variant="filled" severity="error">
          Error
        </Alert>
      )}

      <Stack>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 'bold', textAlign: 'left', mt: 16 }}
        >
          Ваша пропозиція
        </Typography>
        <Typography
          variant="body2"
          gutterBottom
          sx={{
            fontWeight: 'light',
            textAlign: 'left',
            color: 'text.secondary',
          }}
        >
          Далі..."Оформлення"
        </Typography>

        <CarInfo
          id={carData.id}
          icon={carData.image_url}
          carModel={carData.model}
          seats={carData.seats}
          transmissionType={carData.transmission}
          manufactureYear={carData.year}
          description={carData.description}
          price={carData.price}
          isLoading={isLoading}
        />

        <CarBookingForm />
      </Stack>
    </>
  );
};

export default CarBooking;
