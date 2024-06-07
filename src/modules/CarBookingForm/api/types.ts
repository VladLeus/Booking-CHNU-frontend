export type RentCarRequest = {
  id: number;
  car_id: number;
  start_date: string | undefined;
  end_date: string | undefined;
};

export type RentCarResponse = {
  id: number;
  car_id: number;
  start_date: string | undefined;
  end_date: string | undefined;
};
