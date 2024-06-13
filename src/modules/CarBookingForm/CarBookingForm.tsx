import { Box } from '@mui/material';
import CustomInput from '@ui/CustomInput';
import SingleDatePicker from '@ui/SingleDatePicker';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  carBookingSchema,
  CarBookingSchema,
} from '@modules/CarBookingForm/schema';
import { useCallback } from 'react';
import { RentCarRequest } from '@modules/CarBookingForm/api/types.ts';
import { useRentCarMutation } from '@modules/CarBookingForm/api';
import { Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import CustomButton from '@ui/CustomButton';
import DropDownSelector from '@ui/DropDownSelector';
import { CITIES, CITY_MAP } from '@modules/CarBookingForm/_data.ts';
import Stack from '@mui/material/Stack';

const CarBookingForm = () => {
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CarBookingSchema>({
    mode: 'all',
    resolver: zodResolver(carBookingSchema),
    defaultValues: {
      firstName: '',
      city: CITIES[0],
      start_date: null,
      end_date: null,
    },
  });

  const [rentCar, { isLoading, isError, isSuccess }] = useRentCarMutation();

  const onSubmit = useCallback(async (data: CarBookingSchema) => {
    const carDTO: RentCarRequest = {
      car_booking: {
        car_id: Number(id),
        start_date: data.start_date?.toString(),
        end_date: data.end_date?.toString(),
        city: CITY_MAP[data.city],
      },
      token: JSON.parse(localStorage.getItem('user_auth_token')!),
    };

    console.log(carDTO);
    const response = await rentCar(carDTO);

    if (response.data) {
      console.log(
        'Ви успішно забронювали машину №' + response.data?.data.car_id,
      );
    } else if ('error' in response!) {
      console.log(response.error);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2} justifyItems="center">
          {isLoading && (
            <Alert severity="info">
              Запит обробляється, зачекайте будь-ласка.
            </Alert>
          )}

          {isError && (
            <Alert severity="error" variant="filled" sx={{ my: 2 }}>
              Помилка підключення з сервером, спробуйте пізніше.
            </Alert>
          )}

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2.4,
              bgcolor: 'background.default',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              overflow: 'clip',
              cursor: 'pointer',
              mt: 2,
              p: 2.4,
            }}
          >
            <CustomInput
              name="firstName"
              control={control}
              label="Ім'я"
              variant="outlined"
              error={!!errors.firstName}
              helperText={errors.firstName?.message || ''}
            />
            <DropDownSelector
              name="city"
              control={control}
              label="Оберіть місто отримання"
              valuesArray={CITIES}
              error={!!errors.city}
              helperText={errors.city?.message || ''}
            />
            <SingleDatePicker
              name="start_date"
              control={control}
              label="Початок оренди"
              disablePast={true}
              error={!!errors.start_date}
              helperText={errors.start_date?.message || ''}
            />
            <SingleDatePicker
              name="end_date"
              control={control}
              label="Кінець оренди"
              disablePast={true}
              error={!!errors.end_date}
              helperText={errors.end_date?.message || ''}
            />
          </Box>
          <CustomButton
            text="Замовити"
            type="submit"
            size="medium"
            color="primary"
            variant="contained"
            disabled={isSuccess}
          />
          {isSuccess && (
            <Alert severity="info">
              Бронювання успішне, деталі вашого бронювання будуть надіслані на
              ваш email!
            </Alert>
          )}
        </Stack>
      </form>
    </>
  );
};

export default CarBookingForm;
