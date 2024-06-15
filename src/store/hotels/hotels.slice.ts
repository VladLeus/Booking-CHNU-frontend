import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { hotelsInitState } from '@store/hotels/_data.ts';
import { HotelInfo } from '@store/hotels/types.ts';

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: hotelsInitState,
  reducers: {
    setHotels(state, action: PayloadAction<HotelInfo[]>): void {
      state.hotels = action.payload;
    },
    setCity(state, action: PayloadAction<string>): void {
      state.city = action.payload;
    },
    clearHotels(state): void {
      state.hotels = [];
      state.city = '';
    },
  },
});

export const hotelsActions = hotelsSlice.actions;
export const hotelsReducer = hotelsSlice.reducer;
