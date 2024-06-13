import HotelRoomsInfo from '@modules/HotelRoomsInfo';
import { useQuery } from '@shared/hooks';

const HotelRooms = () => {
  const query = useQuery();
  return (
    <HotelRoomsInfo
      hotelName={query.get('hotel-name')!}
      hotelId={query.get('hotel-id')!}
      city={query.get('city')!}
    />
  );
};

export default HotelRooms;
