import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { LoginResponse, UserLoginRequest } from './types.ts';
import { identity } from '@shared/utils';

export const loginAPI = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation<Response<LoginResponse>, UserLoginRequest>({
      query: (body: UserLoginRequest) => ({
        url: BASE_URL + '/login',
        method: 'POST',
        body: body,
      }),
      transformResponse: identity<Response<LoginResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLoginMutation } = loginAPI;
