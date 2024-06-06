import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@shared/store/user';
import { signupAPI } from '@modules/RegistrationForm/api';
import { confirmationAPI } from '@modules/EmailConfirmationForm/api';
import { loginAPI } from '@modules/LoginForm/api';
import { forgotPasswordAPI } from '@modules/ForgotPasswordForm/api';
import { resetTokenCheckAPI } from '@modules/ResetTokenCheck/api';
import { passwordResetAPI } from '@modules/PasswordResetForm/api';
import { logoutAPI } from '@modules/LogOut/api';

export const store = configureStore({
  reducer: {
    [signupAPI.reducerPath]: signupAPI.reducer,
    [confirmationAPI.reducerPath]: confirmationAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [forgotPasswordAPI.reducerPath]: forgotPasswordAPI.reducer,
    [resetTokenCheckAPI.reducerPath]: resetTokenCheckAPI.reducer,
    [passwordResetAPI.reducerPath]: passwordResetAPI.reducer,
    [logoutAPI.reducerPath]: logoutAPI.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(signupAPI.middleware)
      .concat(confirmationAPI.middleware)
      .concat(loginAPI.middleware)
      .concat(forgotPasswordAPI.middleware)
      .concat(resetTokenCheckAPI.middleware)
      .concat(passwordResetAPI.middleware)
      .concat(logoutAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
