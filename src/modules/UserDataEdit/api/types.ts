export type UserInfoEditRequest = {
  user: UserInfoEdit;
  token: string;
};

export type UserInfoEdit = {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  birthdate: string;
  current_password: string;
  new_password?: string;
  new_password_confirmation?: string;
};

export type UserInfoEditResponse = {
  name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: 'Чоловік' | 'Жінка' | 'Інше';
  birthdate: string;
  current_password?: string;
};
