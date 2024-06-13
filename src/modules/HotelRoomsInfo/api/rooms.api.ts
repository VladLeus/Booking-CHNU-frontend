import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { RoomsResponse } from '@modules/HotelRoomsInfo/api/types.ts';
import { identity } from '@shared/utils';

export const roomsAPI = createApi({
  reducerPath: 'rooms/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getHotelRooms: build.query<Response<RoomsResponse[]>, string>({
      query: () => ({
        url: BASE_URL + '/rooms',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<RoomsResponse[]>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyGetHotelRoomsQuery } = roomsAPI;
