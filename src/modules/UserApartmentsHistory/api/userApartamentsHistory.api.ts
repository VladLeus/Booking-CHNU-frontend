import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import { UserApartamentsHistoryResponse } from './types.ts';

export const userApartamentsHistoryApi = createApi({
  reducerPath: 'trip-history/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getUserApartamentsHistory: build.query<
      Response<UserApartamentsHistoryResponse[]>,
      string
    >({
      query: () => ({
        url: BASE_URL + '/apartments_bookings',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<UserApartamentsHistoryResponse[]>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useGetUserApartamentsHistoryQuery } = userApartamentsHistoryApi;
