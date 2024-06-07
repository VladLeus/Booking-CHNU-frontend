//import Stack from "@mui/material/Stack";
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
import { useAppSelector } from '@shared/hooks';
import { useParams } from 'react-router-dom';
import CustomButton from '@ui/CustomButton';

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
      surname: '',
      start_date: null,
      end_date: null,
    },
  });

  const [rentCar, { isLoading, isError }] = useRentCarMutation();
  const user = useAppSelector((state) => state.user);

  const onSubmit = useCallback(async (data: CarBookingSchema) => {
    const carDTO: RentCarRequest = {
      id: user.user.id!,
      car_id: Number(id),
      start_date: data.start_date?.toString(),
      end_date: data.end_date?.toString(),
    };

    console.log(carDTO);
    const response = await rentCar(carDTO);

    if ('data' in response!) {
      console.log('Ви забронювали ' + response.data?.data.car_id);
      localStorage.setItem('user', JSON.stringify(user.user.id!));
      //navigate('/email/confirm');
    } else if ('error' in response!) {
      console.log(response.error);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <CustomInput
            name="surname"
            control={control}
            label="Прізвище"
            variant="outlined"
            error={!!errors.surname}
            helperText={errors.surname?.message || ''}
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

        <Box sx={{ mt: 2 }}>
          <CustomButton
            text={'Замовити'}
            type={'submit'}
            size={'medium'}
            color="primary"
            variant="contained"
          />
        </Box>
      </form>
    </>
  );
};

export default CarBookingForm;
