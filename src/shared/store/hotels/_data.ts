import { HotelInfo } from '@shared/store/hotels/types.ts';

const hotels: HotelInfo[] = [];

export const hotelsInitState = {
  hotels,
  city: '',
}