import { FC, useEffect, useState } from 'react';
import { RoomDetailsProps } from './types.ts';
import { useLazyGetRoomDetailsQuery } from '@modules/RoomDetails/api';
import { RoomDetailsResponse } from '@modules/RoomDetails/api/types.ts';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Alert, Divider, Typography } from '@mui/material';
import RoomBookingForm from '@modules/RoomBookingForm';

const RoomDetails: FC<RoomDetailsProps> = ({ roomId }) => {
  const [getDetails, { isLoading, isError, isSuccess }] =
    useLazyGetRoomDetailsQuery();
  const [details, setDetails] = useState<RoomDetailsResponse>();

  const getRoomDetails = async () => {
    const response = await getDetails(roomId);

    if (response.data) {
      setDetails(response.data.data);
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  return (
    <Stack gap={2}>
      {isLoading && <Alert severity="info">Дані завантажуються...</Alert>}
      {isError && (
        <Alert severity="error" variant="filled">
          Помилка завантаження даних
        </Alert>
      )}
      {isSuccess && (
        <Box>
          <Box
            component="img"
            sx={{
              height: 350,
              width: 480,
              mx: 2,
              borderRadius: 4,
            }}
            alt="The house from the offer."
            src={details?.image_url}
          />
          <Typography>Категорія кімнати: {details?.room_category} </Typography>
          <Typography>Кількість людей: {details?.adults}</Typography>
          <Typography>Кількість ліжок: {details?.beds}</Typography>
          <Typography>Опис: {details?.description}</Typography>
          <Typography>Ціна за ніч: {details?.price} UAH</Typography>
          <Divider sx={{ width: '100%' }}>Забронювати кімнату</Divider>
          <RoomBookingForm
            apartment_id={details?.id!}
            hotel_id={details?.hotel_id!}
          />
        </Box>
      )}
    </Stack>
  );
};

export default RoomDetails;
