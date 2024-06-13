import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import { UserCarsHistoryResponse } from '@modules/UserCarsHistory/api/types.ts';

export const userCarsHistoryApi = createApi({
  reducerPath: 'trip-history-cars/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getUserCarsHistory: build.query<
      Response<UserCarsHistoryResponse[]>,
      string
    >({
      query: () => ({
        url: BASE_URL + '/car_bookings',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<UserCarsHistoryResponse[]>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useGetUserCarsHistoryQuery } = userCarsHistoryApi;
