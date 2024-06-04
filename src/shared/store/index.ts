import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.slice.ts';
import { signupAPI } from '@modules/RegistrationForm/api';
import { confirmationApi } from '@modules/EmailConfirmationForm/api';

export const store = configureStore({
  reducer: {
    [signupAPI.reducerPath]: signupAPI.reducer,
    [confirmationApi.reducerPath]: confirmationApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(signupAPI.middleware)
      .concat(confirmationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
