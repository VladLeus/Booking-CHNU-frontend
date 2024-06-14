export type RoomsResponse = {
  id: string;
  hotel_id: string;
  description: string;
  beds: number;
  adults: number;
  room_category: string;
  price: string;
  rate_code: string;
  image_url: string;
};

export type HotelInfoRequest = {
  hotel_id: string;
  cityCode?: string;
  roomQuantity?: string;
  adults?: number;
  bedType?: string;
  boardType?: string;
  radius?: number;
  radiusUnit?: string;
  rateCode?: 'AA' | 'AAA' | 'AAAA' | 'AAAAA';
};

export type HotelInfoResponse = {
  type: string;
  hotel: Hotel;
  available: boolean;
  offers: Offer[];
  self: string;
};

export interface Hotel {
  type: string;
  hotelId: string;
  chainCode: string;
  dupeId: string;
  name: string;
  cityCode: string;
  latitude: number;
  longitude: number;
}

export interface Offer {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  rateCode: string;
  rateFamilyEstimated: RateFamilyEstimated;
  commission: Commission;
  boardType: string;
  room: Room;
  guests: Guests;
  price: Price;
  policies: Policies;
  self: string;
}

export interface RateFamilyEstimated {
  code: string;
  type: string;
}

export interface Commission {
  percentage: string;
}

export interface Room {
  type: string;
  typeEstimated: TypeEstimated;
  description: Description;
}

export interface TypeEstimated {
  category: string;
  beds: number;
  bedType: string;
}

export interface Description {
  text: string;
  lang: string;
}

export interface Guests {
  adults: number;
}

export interface Price {
  currency: string;
  base: string;
  total: string;
  taxes: Tax[];
  variations: Variations;
}

export interface Tax {
  code: string;
  amount: string;
  currency: string;
  included: boolean;
}

export interface Variations {
  average: Average;
  changes: Change[];
}

export interface Average {
  base: string;
}

export interface Change {
  startDate: string;
  endDate: string;
  base: string;
}

export interface Policies {
  cancellations: Cancellation[];
  paymentType: string;
}

export interface Cancellation {
  description: Description2;
  type: string;
}

export interface Description2 {
  text: string;
}
