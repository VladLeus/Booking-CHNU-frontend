import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import {
  RentCarRequest,
  RentCarResponse,
} from '@modules/CarBookingForm/api/types.ts';
import { identity } from '@shared/utils';

export const carBookingApi = createApi({
  reducerPath: 'cars/rent',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    rentCar: build.mutation<Response<RentCarResponse>, RentCarRequest>({
      query: (body: RentCarRequest) => ({
        url: BASE_URL + '/car_bookings',
        method: 'POST',
        body: body,
      }),
      transformResponse: identity<Response<RentCarResponse>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useRentCarMutation } = carBookingApi;
