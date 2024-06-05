import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { CodeConfirmationRequest, CodeConfirmationResponse } from './types.ts';
import { identity } from '@shared/utils';

export const confirmationAPI = createApi({
  reducerPath: 'confirmation/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    confirmCode: build.mutation<
      Response<CodeConfirmationResponse>,
      CodeConfirmationRequest
    >({
      query: (body: CodeConfirmationRequest) => ({
        url: BASE_URL + '/confirm_code',
        method: 'POST',
        body: body,
      }),
      transformResponse: identity<Response<CodeConfirmationResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useConfirmCodeMutation } = confirmationAPI;
