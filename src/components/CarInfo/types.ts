export interface CarInfoProps {
  id: number;
  icon: string;
  carModel: string;
  seats: number;
  transmissionType: string;
  manufactureYear: number;
  // isPrepared: boolean;
  // isPrepared: 'Yes' | 'No';
  description: string;
  price: number;
  isLoading: boolean;
}
