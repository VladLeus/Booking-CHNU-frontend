export type HotelInfo = {
  chainCode: string;
  iataCode: string;
  dupeId: number;
  name: string;
  hotelId: string;
  geoCode: GeoCode;
  address: Address;
  lastUpdate: string;
};

export interface GeoCode {
  latitude: number;
  longitude: number;
}

export interface Address {
  countryCode: string;
}
