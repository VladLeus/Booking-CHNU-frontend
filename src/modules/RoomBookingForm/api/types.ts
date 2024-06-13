export type BookRoomResponse = {
  id: number;
  hotel_id: string;
  apartment_id: number;
  start_date: string;
  end_date: string;
};

export type BookRoomRequest = {
  hotel_id: string;
  apartment_id: number;
  start_date: string;
  end_date: string;
};
