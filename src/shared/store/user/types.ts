export interface User {
  id: number | undefined;
  email: string;
  name: string;
  surname?: string;
  phone?: string;
  gender?: 'Чоловік' | 'Жінка' | 'Інше';
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

export interface LoginActiveUserState {
  id: number;
  email: string;
  name: string;
  surname: string;
  phone: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate: string;
}
