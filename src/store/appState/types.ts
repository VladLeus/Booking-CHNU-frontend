export interface AppState {
  isUserTokenChecked: boolean;
  isApartmentsHistoryActive: boolean;
  isModalActive: boolean;
  roomBooking: RoomBookingData;
}

export interface RoomBookingData {
  apartmentId: number | undefined;
  hotelId: string;
}
