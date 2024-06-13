import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { BookRoomRequest, BookRoomResponse } from './types.ts';
import { identity } from '@shared/utils';

export const roomBookingAPI = createApi({
  reducerPath: 'room/booking/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    bookRoom: build.mutation<Response<BookRoomResponse>, BookRoomRequest>({
      query: (body: BookRoomRequest) => ({
        url: BASE_URL + '/apartments_bookings',
        method: 'POST',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
        body: {
          apartment_booking: body,
        },
      }),
      transformResponse: identity<Response<BookRoomResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useBookRoomMutation } = roomBookingAPI;
