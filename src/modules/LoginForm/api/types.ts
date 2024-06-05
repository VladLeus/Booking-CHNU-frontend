export type UserLoginRequest = {
  user: {
    email: string;
    password: string;
  };
};

export type LoginResponse = {
  user: {
    name: string;
    last_name: string;
    email: string;
  };
};
