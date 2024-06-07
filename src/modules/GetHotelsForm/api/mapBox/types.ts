export interface MapBoxResponse {
  type: string;
  query: string[];
  features: IFeature[];
  attribution: string;
}

export interface IFeature {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  properties: IProperties;
  text_en: string;
  language_en?: string;
  place_name_en: string;
  text: string;
  language?: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: IGeometry;
  context: IContext[];
  matching_text?: string;
  matching_place_name?: string;
}

export interface IProperties {
  mapbox_id: string;
  wikidata?: string;
}

export interface IGeometry {
  type: string;
  coordinates: number[];
}

export interface IContext {
  id: string;
  mapbox_id: string;
  wikidata: string;
  short_code?: string;
  text_en: string;
  language_en: string;
  text: string;
  language: string;
}
