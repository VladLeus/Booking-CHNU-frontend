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
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        tripHistory: [],
        wallet: [],
        isAuth: true,
      };
    },
  },
});

export const userActions = userSlice.actions;
export const userReducer = userSlice.reducer;
