export type RentCarRequest = {
  car_booking: Car;
  token: string;
};

type Car = {
  car_id: number;
  start_date: string | undefined;
  end_date: string | undefined;
  city: string | null;
};

export type RentCarResponse = {
  id: number;
  car_id: number;
  start_date: string | undefined;
  end_date: string | undefined;
  booking_status: string;
  total_price: string;
  city: string;
};
