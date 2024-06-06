//import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import CustomInput from '@ui/CustomInput';
import SingleDatePicker from '@ui/SingleDatePicker';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  carBookingSchema,
  CarBookingSchema,
} from '@modules/CarBookingForm/schema';

const CarBookingForm = () => {
  const {
    control,
    //handleSubmit,
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

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          overflow: 'clip',
          cursor: 'pointer',
          mt: 2,
          p: 1,
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
          label="Початок"
          disableFuture={false}
          error={!!errors.start_date}
          helperText={errors.start_date?.message || ''}
        />

        <SingleDatePicker
          name="end_date"
          control={control}
          label="Кінець"
          disableFuture={false}
          error={!!errors.end_date}
          helperText={errors.end_date?.message || ''}
        />
      </Box>
    </>
  );
};

export default CarBookingForm;
