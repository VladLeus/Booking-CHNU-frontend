import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SignUpResponse, UserSignupRequest } from './types.ts';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import { BASE_URL } from '@shared/constants';

export const signupAPI = createApi({
  reducerPath: 'signup/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    signup: build.mutation<Response<SignUpResponse>, UserSignupRequest>({
      query: (body: UserSignupRequest) => ({
        url: BASE_URL + '/signup',
        method: 'POST',
        body: body,
      }),
      transformResponse: identity<Response<SignUpResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useSignupMutation } = signupAPI;
