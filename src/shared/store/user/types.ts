export interface User {
  id: string | undefined;
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
  id: string;
  name: string;
  email: string;
}
