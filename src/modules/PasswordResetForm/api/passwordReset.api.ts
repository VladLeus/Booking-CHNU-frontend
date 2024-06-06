import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { PasswordResetRequest, PasswordResetResponse } from './types.ts';
import { identity } from '@shared/utils';

export const passwordResetAPI = createApi({
  reducerPath: 'passwordReset/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    reset: build.mutation<
      Response<PasswordResetResponse>,
      PasswordResetRequest
    >({
      query: (req: PasswordResetRequest) => ({
        url: BASE_URL + '/password/reset/edit',
        method: 'PATCH',
        params: {
          token: req.token,
        },
        body: {
          user: {
            password: req.password,
            password_confirmation: req.password_confirmation,
          },
        },
      }),
      transformResponse: identity<Response<PasswordResetResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useResetMutation } = passwordResetAPI;
