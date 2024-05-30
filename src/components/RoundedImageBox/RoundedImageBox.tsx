import HotelImageBox from 'components/HotelImageBox';
import ApartmentBox from '@components/ApartmentBox';
import Box from '@mui/material/Box';
import RoomBox from '@components/RoomBox';

export function RoundedImageBox() {
  return (
    <>
      <Box
        sx={{ mx: 4, display: 'flex', flexDirection: 'column', gap: 4, mb: 5 }}
      >
        <HotelImageBox
          icon={
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
          }
          hotelName={'Everlabs'}
          country={'Україна'}
          place={'Черкаси'}
          point={8.6}
          rating={'Чудово'}
          reviews={301}
          price={1240}
        />

        <ApartmentBox
          icon={
            'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o='
          }
          type={'Hotel'}
          dateRange={'2024-06-01 - 2024-06-05'}
          availability={201}
        />

        <RoomBox
          icon={
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2'
          }
          hotelName={'Hotel Spa'}
          city={'Cherkasy'}
          bedNumber={1}
          roomCategory={'Royal'}
          description={'There is royal room for you.'}
          price={3200}
        />
      </Box>
    </>
  );
}
