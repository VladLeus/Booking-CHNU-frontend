export interface CarInfoProps {
  id: number;
  icon: string;
  carModel: string;
  seats: number;
  transmissionType: string;
  manufactureYear: number;
  description: string;
  price: number;
  isLoading: boolean;
}
