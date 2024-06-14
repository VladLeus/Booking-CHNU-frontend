export type UserInfoResponse = {
  id: number;
  email: string;
  name: string;
  last_name: string;
  phone_number: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate: string;
  current_password: string;
};
