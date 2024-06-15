import { useEffect, useState } from 'react';
import { useLazyGetRoomDetailsQuery } from '@modules/RoomDetails/api';
import { RoomDetailsResponse } from '@modules/RoomDetails/api/types.ts';
import Stack from '@mui/material/Stack';
import { Alert } from '@mui/material';
import RoomBookingForm from '@modules/RoomBookingForm';
import { ERROR_MAPPER } from '@shared/utils';
import { LOADING_TEXT } from '@shared/constants';
import RoomDetailsText from '@components/RoomDetailText';
import { useActions, useQuery } from '@shared/hooks';

const RoomDetails = () => {
  const [getDetails, { isLoading, isError }] = useLazyGetRoomDetailsQuery();
  const query = useQuery();
  const { setBookingFormData } = useActions();
  const [details, setDetails] = useState<RoomDetailsResponse>();
  const [errorText, setErrorText] = useState<string>('');

  const getRoomDetails = async () => {
    const response = await getDetails(query.get('room-id')!);

    if (response.data) {
      setDetails(response.data.data);
      setBookingFormData({
        apartmentId: response.data.data.id,
        hotelId: response.data.data.hotel_id,
      });
    } else if (response.error && 'status' in response.error) {
      setErrorText(ERROR_MAPPER[response.error.status]);
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
      {details && (
        <>
          <RoomDetailsText
            imageUrl={details.image_url}
            roomCategory={details.room_category}
            adults={details.adults}
            beds={details.beds}
            description={details.description}
            price={details.price}
          />
          <RoomBookingForm />
        </>
      )}
    </Stack>
  );
};

export default RoomDetails;
