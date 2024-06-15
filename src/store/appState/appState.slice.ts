import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { appInitState } from './_data.ts';
import { RoomBookingData } from './types.ts';

export const appStateSlice = createSlice({
  name: 'appState',
  initialState: appInitState,
  reducers: {
    setIsUserTokenChecked(state, action: PayloadAction<boolean>): void {
      state.isUserTokenChecked = action.payload;
    },
    switchHistories(state): void {
      console.log('clicked');
      state.isApartmentsHistoryActive = !state.isApartmentsHistoryActive;
    },
    toggleModal(state): void {
      state.isModalActive = !state.isModalActive;
    },
    setBookingFormData(state, action: PayloadAction<RoomBookingData>): void {
      state.roomBooking = action.payload;
    },
  },
});

export const appActions = appStateSlice.actions;
export const appReducer = appStateSlice.reducer;
