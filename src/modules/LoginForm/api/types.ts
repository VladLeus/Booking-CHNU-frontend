export type UserLoginRequest = {
  user: {
    email: string;
    password: string;
  };
};

export type LoginResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    token: string;
  };
};
