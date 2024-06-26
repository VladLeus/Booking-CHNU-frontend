import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import { BalanceInfoResponse } from '@modules/BalanceInfo/api/types.ts';

export const balanceApi = createApi({
  reducerPath: 'wallet/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getBallance: build.query<Response<BalanceInfoResponse>, string>({
      query: () => ({
        url: BASE_URL + '/bonus_wallets',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<BalanceInfoResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useGetBallanceQuery } = balanceApi;
