import { useAppSelector, useLoading } from '@shared/hooks';
import { HotelInfo } from '@shared/store/hotels/types.ts';
import Box from '@mui/material/Box';
import HotelImageBox from '@components/HotelImageBox';

const HotelsResultsGenerator = () => {
  const { hotels, city } = useAppSelector((state) => state.hotels);
  const isLoading = useLoading();

  const getRandomFloat = (
    min: number,
    max: number,
    precision: number = 1,
  ): number => {
    const randomFloat = Math.random() * (max - min) + min;
    return parseFloat(randomFloat.toFixed(precision));
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
      {hotels.map((hotel: HotelInfo) => (
        <HotelImageBox
          key={hotel.hotelId}
          icon={'#'}
          hotelName={hotel.name}
          country={hotel.address.countryCode}
          place={city}
          point={2}
          rating={getRandomFloat(5.5, 10.0, 1).toString()}
          reviews={0}
          price={Math.floor(Math.random() * (6000 - 1000 + 1)) + 1000}
          isLoading={isLoading}
        />
      ))}
    </Box>
  );
};

export default HotelsResultsGenerator;
