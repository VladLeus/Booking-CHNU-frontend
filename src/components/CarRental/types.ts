export interface CarRentalProps {
  icon: string;
  carModel: string;
  seats: number;
  transmissionType: 'auto' | 'mechanical';
  manufactureYear: number;
  //isPrepared: boolean;
  isPrepared: 'Yes' | 'No';
  description: string;
  price: number;
  isLoading: boolean;
}
