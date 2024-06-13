import RoomDetails from '@modules/RoomDetails';
import { useQuery } from '@shared/hooks';

const RoomInfo = () => {
  const query = useQuery();
  return <RoomDetails roomId={query.get('room-id')!} />;
};

export default RoomInfo;
