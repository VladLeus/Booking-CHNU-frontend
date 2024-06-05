export interface RoomBoxProps {
  icon: string;
  hotelName: string;
  city: string;
  bedNumber: number;
  roomCategory: 'Saver' | 'Common' | 'Luxury' | 'Royal';
  description: string;
  price: number;
  isLoading: boolean;
}
