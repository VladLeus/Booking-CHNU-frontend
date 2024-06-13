import { FC, useEffect, useState } from 'react';
import { HotelRoomsInfoProps, Room } from './types.ts';
import Stack from '@mui/material/Stack';
import { Alert, Typography } from '@mui/material';
import { useLazyGetHotelRoomsQuery } from './api/rooms.api.ts';
import RoomBox from '@components/RoomBox';
import { useLoading } from '@shared/hooks';

const HotelRoomsInfo: FC<HotelRoomsInfoProps> = ({ hotelName, city }) => {
  const [getRooms, { isLoading, isError }] = useLazyGetHotelRoomsQuery();
  const [rooms, setRooms] = useState<Room[]>([]);
  const skeleton = useLoading();

  const getAllRooms = async () => {
    const response = await getRooms('');

    if (response.data) {
      setRooms(response.data.data);
    } else if (response.error) {
      console.log(response.error);
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <Stack gap={2} textAlign="center">
      {isLoading && <Alert severity="info">Дані завантажуються...</Alert>}
      {isError && (
        <Alert severity="error">Виникла помилка при завантаженні даних</Alert>
      )}
      <Typography variant="h4" component="h1" fontWeight="bold">
        Доступні кімнати в {hotelName}
      </Typography>
      {rooms.map((room: Room) => (
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
      ))}
    </Stack>
  );
};

export default HotelRoomsInfo;
