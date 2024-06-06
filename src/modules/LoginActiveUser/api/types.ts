export type LoginActiveUserResponse = {
  id: number;
  email: string;
  name: string;
  last_name: string;
  phone_number: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate: string;
  provider: null;
  uid: null;
  role: 'user';
}

export type LoginActiveRequest = {
  token: string;
}