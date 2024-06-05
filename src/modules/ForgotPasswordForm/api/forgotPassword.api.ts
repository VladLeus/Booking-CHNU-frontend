import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { ForgotPasswordRequest, ForgotPasswordResponse } from './types.ts';
import { identity } from '@shared/utils';

export const forgotPasswordAPI = createApi({
  reducerPath: 'forgot-password/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    forgotPassword: build.mutation<
      Response<ForgotPasswordResponse>,
      ForgotPasswordRequest
    >({
      query: (body: ForgotPasswordRequest) => ({
        url: BASE_URL + '/password/reset',
        method: 'POST',
        body: body,
      }),
      transformResponse: identity<Response<ForgotPasswordResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useForgotPasswordMutation } = forgotPasswordAPI;
