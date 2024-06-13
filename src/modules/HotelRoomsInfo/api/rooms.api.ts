import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@shared/constants';
import { Response } from '@shared/types';
import { HotelInfoRequest, HotelInfoResponse, RoomsResponse } from './types.ts';
import { identity } from '@shared/utils';

export const roomsAPI = createApi({
  reducerPath: 'rooms/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getHotelRooms: build.query<Response<RoomsResponse[]>, string>({
      query: () => ({
        url: BASE_URL + '/rooms',
        headers: {
          Authorization: JSON.parse(localStorage.getItem('user_auth_token')!),
        },
      }),
      transformResponse: identity<Response<RoomsResponse[]>>,
      transformErrorResponse: identity,
    }),
    getHotelInfo: build.query<Response<HotelInfoResponse[]>, HotelInfoRequest>({
      query: (req: HotelInfoRequest) => ({
        url: BASE_URL + '/hotels/find_rooms',
        params: {
          hotel_ids: req.hotel_id,
          cityCode: req.cityCode,
          roomQuantity: req.roomQuantity,
          adults: req.adults,
          bedType: req.bedType,
          boardType: req.boardType,
          radius: req.radius,
          radiusUnit: req.radiusUnit,
          rateCode: req.rateCode,
        },
      }),
      transformResponse: identity<Response<HotelInfoResponse[]>>,
      transformErrorResponse: identity,
    }),
  }),
});

export const { useLazyGetHotelRoomsQuery, useLazyGetHotelInfoQuery } = roomsAPI;
