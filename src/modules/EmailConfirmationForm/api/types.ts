type User = {
  name: string;
  last_name: string;
  email: string;
};

export type CodeConfirmationResponse = {
  user: User;
  token: string;
};

export type CodeConfirmationRequest = {
  email: string;
  code: string;
};
