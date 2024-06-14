import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import { UserInfoResponse } from '@modules/UserInfo/api/types.ts';

export const userInfoApi = createApi({
  reducerPath: 'profile-settings/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getUserInfo: build.query<Response<UserInfoResponse>, string>({
      query: () => ({
        url: BASE_URL + '/profile',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<UserInfoResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useGetUserInfoQuery, useLazyGetUserInfoQuery } = userInfoApi;
