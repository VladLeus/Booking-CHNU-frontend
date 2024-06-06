export interface CarRentalProps {
  id: number;
  icon: string;
  carModel: string;
  seats: number;
  // transmissionType: 'auto' | 'mechanical';
  transmissionType: string;
  manufactureYear: number;
  // isPrepared: boolean;
  // isPrepared: 'Yes' | 'No';
  description: string;
  price: number;
  isLoading: boolean;
}
