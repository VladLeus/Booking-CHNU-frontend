export interface HotelRoomsInfoProps {
  hotelName: string;
  city: string;
}

export interface Room {
  id: string;
  hotel_id: string;
  description: string;
  beds: number;
  adults: number;
  room_category: string;
  price: string;
  rate_code: string;
  image_url: string;
}
