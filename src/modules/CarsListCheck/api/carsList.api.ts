import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { CarsListResponse } from '@modules/CarsListCheck/api/types.ts';
import { identity } from '@shared/utils';

export const carsListApi = createApi({
  reducerPath: 'cars/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getAllCars: build.query<Response<CarsListResponse[]>, string>({
      query: () => ({
        url: BASE_URL + '/cars',
        params: { page: 1, per_page: '' },
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<CarsListResponse[]>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useGetAllCarsQuery } = carsListApi;
