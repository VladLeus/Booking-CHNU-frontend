export type CodeConfirmationResponse = {
  id: number;
  name: string;
  token: string;
  email: string;
};

export type CodeConfirmationRequest = {
  email: string;
  confirmation_code: string;
};
