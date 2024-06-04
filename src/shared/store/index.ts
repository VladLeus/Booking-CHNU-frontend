import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@shared/store/user';
import { signupAPI } from '@modules/RegistrationForm/api';
import { confirmationAPI } from '@modules/EmailConfirmationForm/api';
import { loginAPI } from '@modules/LoginForm/api';

export const store = configureStore({
  reducer: {
    [signupAPI.reducerPath]: signupAPI.reducer,
    [confirmationAPI.reducerPath]: confirmationAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(signupAPI.middleware)
      .concat(confirmationAPI.middleware)
      .concat(loginAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
