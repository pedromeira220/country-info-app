import { CountriesNowResponse } from "./countries-now-response";

export type CountryFlagImagesResponse = CountriesNowResponse<
  {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }[]
>;
