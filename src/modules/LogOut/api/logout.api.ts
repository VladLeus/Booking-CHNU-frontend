import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { LogOutRequest, LogOutResponse } from '@modules/LogOut/api/types.ts';
import { identity } from '@shared/utils';

export const logoutAPI = createApi({
  reducerPath: 'logout/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    logout: build.mutation<Response<LogOutResponse>, LogOutRequest>({
      query: (req: LogOutRequest) => ({
        url: BASE_URL + '/logout',
        method: 'DELETE',
        headers: {
          Authorization: req.token,
        },
      }),
      transformResponse: identity<Response<LogOutResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLogoutMutation } = logoutAPI;
