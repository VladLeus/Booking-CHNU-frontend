import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { identity } from '@shared/utils';
import {
  UserInfoEditRequest,
  UserInfoEditResponse,
} from '@modules/UserDataEdit/api/types';

export const userInfoEditApi = createApi({
  reducerPath: 'profile-edit/rent',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    profileEdit: build.mutation<
      Response<UserInfoEditResponse>,
      UserInfoEditRequest
    >({
      query: (req: UserInfoEditRequest) => ({
        url: BASE_URL + '/profile',
        method: 'PATCH',
        headers: {
          Authorization: req.token,
        },
        body: { user: req.user },
      }),
      transformResponse: identity<Response<UserInfoEditResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useProfileEditMutation } = userInfoEditApi;
