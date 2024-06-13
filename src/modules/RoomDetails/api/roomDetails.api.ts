import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { RoomDetailsResponse } from '@modules/RoomDetails/api/types.ts';
import { identity } from '@shared/utils';

export const roomDetailsAPI = createApi({
  reducerPath: 'room/details/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getRoomDetails: build.query<Response<RoomDetailsResponse>, string>({
      query: (roomId: string) => ({
        url: BASE_URL + `/rooms/${roomId}`,
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<RoomDetailsResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyGetRoomDetailsQuery } = roomDetailsAPI;
