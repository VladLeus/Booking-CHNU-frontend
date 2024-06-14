export type PasswordResetResponse = object;

export type PasswordResetRequest = {
  password: string;
  password_confirmation: string;
  token: string;
};
