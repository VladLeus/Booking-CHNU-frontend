import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import {
  LoginActiveRequest,
  LoginActiveUserResponse,
} from '@modules/LoginActiveUser/api/types.ts';
import { identity } from '@shared/utils';

export const loginActiveUserAPI = createApi({
  reducerPath: 'loginActiveUser/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    loginActive: build.query<
      Response<LoginActiveUserResponse>,
      LoginActiveRequest
    >({
      query: (req: LoginActiveRequest) => ({
        url: BASE_URL + '/profile',
        headers: {
          Authorization: req.token,
        },
      }),
      transformResponse: identity<Response<LoginActiveUserResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyLoginActiveQuery } = loginActiveUserAPI;
