type User = {
  email: string;
  password: string;
  name: string;
  last_name: string;
  phone_number: string;
  gender: string;
  birthdate: string | undefined;
};

export type UserSignupRequest = {
  user: User;
};

export type SignupResponse = {
  confirmation_code: string;
};
