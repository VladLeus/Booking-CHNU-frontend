import { useAppSelector, useLoading, useQuery } from '@shared/hooks';
import { HotelInfo } from '@shared/store/hotels/types.ts';
import Box from '@mui/material/Box';
import HotelImageBox from '@components/HotelImageBox';
import { Theme, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HotelsResultsGenerator = () => {
  const { hotels, city } = useAppSelector((state) => state.hotels);
  const isLoading = useLoading();
  const theme: Theme = useTheme();
  const isSmScreen: boolean = useMediaQuery(theme.breakpoints.up('sm'));
  const navigate = useNavigate();
  const query = useQuery();

  const getRandomFloat = (
    min: number,
    max: number,
    precision: number = 1,
  ): number => {
    const randomFloat = Math.random() * (max - min) + min;
    return parseFloat(randomFloat.toFixed(precision));
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns={isSmScreen ? 'repeat(3, 1fr)' : 'repeat(1, 1fr)'}
      gap={2}
    >
      {hotels.map((hotel: HotelInfo) => (
        <Box
          onClick={() =>
            navigate(
              `hotel/rooms?city=${query.get('city')}&hotel-name=${hotel.name}&hotel-id=${hotel.hotelId}`,
            )
          }
        >
          <HotelImageBox
            key={hotel.hotelId}
            hotelName={hotel.name}
            country={hotel.address.countryCode}
            place={city}
            point={getRandomFloat(5.5, 10.0, 1)}
            rating={''}
            reviews={Math.floor(Math.random() * (250 - 45 + 1)) + 45}
            isLoading={isLoading}
          />
        </Box>
      ))}
    </Box>
  );
};

export default HotelsResultsGenerator;
