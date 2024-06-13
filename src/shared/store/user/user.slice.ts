import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './_data.ts';
import {
  LoginActiveUserState,
  UserInfoAfterEdit,
  UserStateAfterReg,
} from './types.ts';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>): void {
      state.user.isAuth = action.payload;
    },
    setUserRegOrLogData(state, action: PayloadAction<UserStateAfterReg>): void {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        tripHistory: [],
        wallet: [],
        isAuth: true,
      };
    },
    logOutUser(state): void {
      state.user = initialState.user;
    },
    loginActiveUser(state, action: PayloadAction<LoginActiveUserState>): void {
      state.user = {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        surname: action.payload.surname,
        phone: action.payload.phone,
        gender: action.payload.gender,
        birthdate: action.payload.birthdate,
        tripHistory: [],
        wallet: [],
        isAuth: true,
      };
    },
    updateUserProfile(state, action: PayloadAction<UserInfoAfterEdit>): void {
      state.user = {
        id: state.user.id,
        email: action.payload.email,
        name: action.payload.name,
        surname: action.payload.last_name,
        phone: action.payload.phone_number,
        gender: action.payload.gender,
        birthdate: action.payload.birthdate,
        tripHistory: [],
        wallet: [],
        isAuth: true,
      };
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
