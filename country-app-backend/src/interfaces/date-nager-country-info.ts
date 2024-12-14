import { AvailableCountryList } from "./available-country-list";

export interface DateNagerCountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | AvailableCountryList;
}
