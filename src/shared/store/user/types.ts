export interface User {
  id: number | undefined;
  email: string;
  name: string;
  surname?: string;
  phone?: string;
  gender?: string;
  birthdate?: string;
  tripHistory: string[];
  wallet: string[];
  isAuth: boolean;
}

export interface UserStateAfterReg {
  id: number;
  name: string;
  email: string;
}
