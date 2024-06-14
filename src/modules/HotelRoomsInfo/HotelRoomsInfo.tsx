import { FC, useEffect, useState } from 'react';
import { HotelRoomsInfoProps, Room } from './types.ts';
import Stack from '@mui/material/Stack';
import { Alert, Typography } from '@mui/material';
import {
  useLazyGetHotelInfoQuery,
  useLazyGetHotelRoomsQuery,
} from './api/rooms.api.ts';
import RoomBox from '@components/RoomBox';
import { useLoading } from '@shared/hooks';
import { useNavigate } from 'react-router-dom';
import { HotelInfoResponse } from '@modules/HotelRoomsInfo/api/types.ts';
import Box from '@mui/material/Box';
import { renderStars } from '@shared/utils';
import { errorMapper } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';

const HotelRoomsInfo: FC<HotelRoomsInfoProps> = ({
  hotelName,
  city,
  hotelId,
}) => {
  const [getRooms, { isLoading, isError }] = useLazyGetHotelRoomsQuery();
  const [
    getDetails,
    { isLoading: isDetailsLoading, isError: isDetailsError, isSuccess },
  ] = useLazyGetHotelInfoQuery();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [hotelDetails, setHotelDetails] = useState<HotelInfoResponse>();
  const [severity, setSeverity] = useState<'warning' | 'error'>('warning');
  const [detailsErrorText, setDetailsErrorText] = useState<string>('');
  const skeleton = useLoading();
  const navigate = useNavigate();

  const getAllRooms = async () => {
    const response = await getRooms('');

    if (response.data) {
      setRooms(response.data.data);
    } else if (response.error) {
      console.log(response.error);
    }
  };

  const getHotelDetails = async () => {
    const response = await getDetails({
      hotel_id: hotelId,
    });

    if (response.data) {
      setHotelDetails(response.data.data[0]);
    } else if (response.error && 'status' in response.error) {
      if (response.error.status === 422) {
        setDetailsErrorText(
          'На жаль ми не можемо отримати детальної інформації про обраний готель',
        );
      } else {
        setDetailsErrorText(errorMapper(response.error.status as number));
        setSeverity('error');
      }
    }
  };

  useEffect(() => {
    getAllRooms();
    getHotelDetails();
  }, []);

  return (
    <Stack gap={2} textAlign="center" alignItems="center">
      {isLoading ||
        (isDetailsLoading && <Alert severity="info">{LOADING_TEXT}</Alert>)}
      {isError && (
        <Alert severity="error">Виникла помилка при завантаженні даних</Alert>
      )}
      {isDetailsError && (
        <Alert severity={severity} variant="filled">
          {detailsErrorText}
        </Alert>
      )}
      {isSuccess && (
        <Stack color="textSecondary">
          <Typography variant="body1" fontWeight="normal">
            Детальна інформація про {hotelName}
          </Typography>
          <Typography>
            Рейтинг: {renderStars(hotelDetails.offers[0].rateCode!)}
          </Typography>
          <Typography>
            Прийомі їжі що входять у вартість:{' '}
            {hotelDetails.offers[0].boardType}
          </Typography>
          <Typography>
            Ціна налогу за 1 день, що не входить у вартість до оплати:{' '}
            {hotelDetails.offers[0].price.taxes[0].amount}{' '}
            {hotelDetails.offers[0].price.taxes[0].currency}
          </Typography>
          <Alert severity="warning">
            Хочемо зауважити, що наш сервіс не приймає оплату. Оплата
            здійснюється по факту приїзду на рецепшені!
          </Alert>
        </Stack>
      )}
      <Typography variant="h4" component="h1" fontWeight="bold">
        Доступні кімнати в {hotelName}
      </Typography>
      {rooms.map((room: Room) => (
        <Box
          onClick={() => navigate(`hotel/room/details?room-id=${room.id}`)}
          textAlign="left"
          maxWidth={600}
        >
          <RoomBox
            icon={room.image_url}
            hotelName={room.hotel_id}
            city={city}
            bedNumber={room.beds}
            roomCategory={room.room_category}
            description={room.description}
            price={room.price}
            isLoading={skeleton}
          />
        </Box>
      ))}
    </Stack>
  );
};

export default HotelRoomsInfo;
