import { HotelInfo } from '@store/hotels/types.ts';

const hotels: HotelInfo[] = [];

export const hotelsInitState = {
  hotels,
  city: '',
};
