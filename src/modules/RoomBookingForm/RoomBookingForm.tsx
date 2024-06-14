import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  RoomBookingSchema,
  roomBookingSchema,
} from '@modules/RoomBookingForm/schema';
import { FC, useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';
import CustomInput from '@ui/CustomInput';
import SingleDatePicker from '@ui/SingleDatePicker';
import CustomButton from '@ui/CustomButton';
import { Alert } from '@mui/material';
import { useBookRoomMutation } from '@modules/RoomBookingForm/api';
import { RoomBookingFormProps } from '@modules/RoomBookingForm/types.ts';
import { useActions, useAppSelector } from '@shared/hooks';
import { BookRoomRequest } from '@modules/RoomBookingForm/api/types.ts';
import { useNavigate } from 'react-router-dom';
import { errorMapper } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

const RoomBookingForm: FC<RoomBookingFormProps> = ({
  hotelId,
  apartmentId,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RoomBookingSchema>({
    mode: 'all',
    resolver: zodResolver(roomBookingSchema),
    defaultValues: {
      firstName: user.name,
      start_date: null,
      end_date: null,
    },
  });

  const [book, { isLoading, isError, isSuccess }] = useBookRoomMutation();
  const navigate = useNavigate();
  const { clearHotels } = useActions();
  const [errorText, setErrorText] = useState<string>('');

  const onSubmit = useCallback(async (formData: RoomBookingSchema) => {
    console.log(formData, hotelId, apartmentId);
    const bookRoomReq: BookRoomRequest = {
      hotel_id: hotelId,
      apartment_id: apartmentId,
      start_date: formData.start_date?.toString()!,
      end_date: formData.end_date?.toString()!,
    };
    const response = await book(bookRoomReq);

    if (response.data) {
      clearHotels();
      setTimeout(() => navigate('/home'), 2500);
    } else if (response.error && 'status' in response.error) {
      setErrorText(errorMapper(response.error.status as number));
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2}>
        {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}

        {isError && (
          <Alert severity="error" variant="filled" sx={{ my: 2 }}>
            {errorText}
          </Alert>
        )}

        {isSuccess && (
          <Alert severity="info">
            Бронювання успішне, деталі вашого бронювання будуть надіслані на ваш
            email! Вас буде переведено на початкову сторінку.
          </Alert>
        )}
        <CustomInput
          name="firstName"
          control={control}
          label="Ім'я"
          variant="outlined"
          error={!!errors.firstName}
          helperText={errors.firstName?.message || ''}
        />
        <Stack direction="row" gap={2}>
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
        </Stack>
        <CustomButton
          text="Замовити"
          type="submit"
          size="medium"
          color="primary"
          variant="contained"
          disabled={isSuccess}
        />
      </Stack>
    </form>
  );
};

export default RoomBookingForm;
