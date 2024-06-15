import { AppState } from './types.ts';

export const appInitState: AppState = {
  isUserTokenChecked: false,
  isApartmentsHistoryActive: true,
  isModalActive: false,
  roomBooking: {
    apartmentId: undefined,
    hotelId: '',
  },
};
