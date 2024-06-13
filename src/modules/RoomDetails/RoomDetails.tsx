import { FC, useEffect, useState } from 'react';
import { RoomDetailsProps } from './types.ts';
import { useLazyGetRoomDetailsQuery } from '@modules/RoomDetails/api';
import { RoomDetailsResponse } from '@modules/RoomDetails/api/types.ts';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Alert, Divider, Typography } from '@mui/material';
import RoomBookingForm from '@modules/RoomBookingForm';
import { errorMapper } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

const RoomDetails: FC<RoomDetailsProps> = ({ roomId }) => {
  const [getDetails, { isLoading, isError, isSuccess }] =
    useLazyGetRoomDetailsQuery();
  const [details, setDetails] = useState<RoomDetailsResponse>();
  const [errorText, setErrorText] = useState<string>('');

  const getRoomDetails = async () => {
    const response = await getDetails(roomId);

    if (response.data) {
      setDetails(response.data.data);
    } else if (response.error && 'status' in response.error) {
      setErrorText(errorMapper(response.error.status as number));
    }
  };

  useEffect(() => {
    getRoomDetails();
  }, []);

  return (
    <Stack gap={2}>
      {isLoading && <Alert severity="info">{LOADING_TEXT}</Alert>}
      {isError && (
        <Alert severity="error" variant="filled">
          {errorText}
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
            apartmentId={details?.id!}
            hotelId={details?.hotel_id!}
          />
        </Box>
      )}
    </Stack>
  );
};

export default RoomDetails;
