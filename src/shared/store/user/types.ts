export interface User {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  gender?: string;
  birthdate?: string;
  tripHistory: string[];
  wallet: string[];
  isAuth: boolean;
}

export interface UserStateAfterReg {
  name: string;
  last_name: string;
  email: string;
}
