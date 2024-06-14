import { Alert, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetAllCarsQuery } from '@modules/CarsListCheck/api';
import CarInfo from '@components/CarInfo';
import Stack from '@mui/material/Stack';
import CarBookingForm from '@modules/CarBookingForm';

const CarBooking = () => {
  const { id } = useParams();
  const { data: car, isLoading, isError } = useGetAllCarsQuery(id || '');

  if (isLoading) {
    return <Alert severity="info">Loading</Alert>;
  }

  if (isError || !car) {
    return <Alert severity="error">Такої машини не існує</Alert>;
  }

  const car_id = Number(id);
  const carData = car.data && car.data[car_id - 1];

  if (!carData) {
    return <Alert severity="error">Такої машини не існує</Alert>;
  }

  return (
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
  );
};

export default CarBooking;
