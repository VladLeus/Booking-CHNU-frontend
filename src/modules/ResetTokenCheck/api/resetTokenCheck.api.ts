import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { ResetTokenCheckResponse } from './types.ts';
import { identity } from '@shared/utils';

export const resetTokenCheckAPI = createApi({
  reducerPath: 'resetTokenCheck/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    tokenCheck: build.query<Response<ResetTokenCheckResponse>, string>({
      query: (token: string) => ({
        url: BASE_URL + '/password/reset/edit',
        params: {
          token: token,
        },
      }),
      transformResponse: identity<Response<ResetTokenCheckResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyTokenCheckQuery } = resetTokenCheckAPI;
