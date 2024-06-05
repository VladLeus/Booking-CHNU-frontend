type User = {
  id: string;
  email: string;
  name: string;
};

export type CodeConfirmationResponse = {
  user: User;
  token: string;
};

export type CodeConfirmationRequest = {
  email: string;
  confirmation_code: string;
};
