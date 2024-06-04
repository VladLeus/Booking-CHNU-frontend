export type UserSignupRequest = {
  email: string;
  password: string;
  name: string;
  last_name: string;
  phone_number: string;
  gender: string;
  birthdate: string;
};

export type SignUpResponse = {
  confirmation_code: string;
};
