export type ForgotPasswordRequest = {
  email: string;
};

export type ForgotPasswordResponse = {
  reset_password_url: string;
};
