import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { HotelsResponse } from './types.ts';
import { getCityName } from '../_data.ts';
import { identity } from '@shared/utils';

export const getHotelsAPI = createApi({
  reducerPath: 'hotels/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getHotels: build.query<Response<HotelsResponse>, string>({
      query: (cityName: string) => ({
        url: BASE_URL + `/hotels/by_city/${getCityName(cityName)}`,
      }),
      transformResponse: identity<Response<HotelsResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyGetHotelsQuery } = getHotelsAPI;
