import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './_data.ts';
import { UserStateAfterReg } from './types.ts';

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.user.isAuth = action.payload;
    },
    setUserRegData(state, action: PayloadAction<UserStateAfterReg>) {
      state.user = {
        name: action.payload.name,
        surname: action.payload.last_name,
        email: action.payload.email,
        tripHistory: [],
        wallet: [],
        isAuth: true,
      };
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
