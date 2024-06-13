export interface User {
  id: number | undefined;
  email: string;
  name: string;
  surname?: string;
  phone?: string;
  gender?: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate?: string;
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

export interface UserInfoAfterEdit {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate: string;
}
