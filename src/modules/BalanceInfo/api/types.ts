export type BalanceInfoRequest = {
  user_id: number;
};

export type BalanceInfoResponse = {
  id: number;
  user_id: number;
  amount: number;
  created_at: string;
  cashback_percentage: number;
};
