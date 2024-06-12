import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '@shared/store/user';
import { signupAPI } from '@modules/RegistrationForm/api';
import { confirmationAPI } from '@modules/EmailConfirmationForm/api';
import { loginAPI } from '@modules/LoginForm/api';
import { forgotPasswordAPI } from '@modules/ForgotPasswordForm/api';
import { resetTokenCheckAPI } from '@modules/ResetTokenCheck/api';
import { passwordResetAPI } from '@modules/PasswordResetForm/api';
import { logoutAPI } from '@modules/LogOut/api';
import { loginActiveUserAPI } from '@modules/LoginActiveUser/api';
import { carsListApi } from '@modules/CarsListCheck/api';
import { mapBoxApi } from '@modules/GetHotelsForm/api/mapBox';
import { carBookingApi } from '@modules/CarBookingForm/api';
import { balanceApi } from '@modules/BalanceInfo/api';
import { userInfoApi } from '@modules/UserInfo/api';

export const store = configureStore({
  reducer: {
    [signupAPI.reducerPath]: signupAPI.reducer,
    [confirmationAPI.reducerPath]: confirmationAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,
    [forgotPasswordAPI.reducerPath]: forgotPasswordAPI.reducer,
    [resetTokenCheckAPI.reducerPath]: resetTokenCheckAPI.reducer,
    [passwordResetAPI.reducerPath]: passwordResetAPI.reducer,
    [logoutAPI.reducerPath]: logoutAPI.reducer,
    [loginActiveUserAPI.reducerPath]: loginActiveUserAPI.reducer,
    [mapBoxApi.reducerPath]: mapBoxApi.reducer,
    user: userReducer,

    [carsListApi.reducerPath]: carsListApi.reducer,
    [carBookingApi.reducerPath]: carBookingApi.reducer,
    [balanceApi.reducerPath]: balanceApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(signupAPI.middleware)
      .concat(confirmationAPI.middleware)
      .concat(loginAPI.middleware)
      .concat(forgotPasswordAPI.middleware)
      .concat(resetTokenCheckAPI.middleware)
      .concat(passwordResetAPI.middleware)
      .concat(logoutAPI.middleware)
      .concat(loginActiveUserAPI.middleware)
      .concat(carsListApi.middleware)
      .concat(mapBoxApi.middleware)
      .concat(carBookingApi.middleware)
      .concat(balanceApi.middleware)
      .concat(userInfoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
