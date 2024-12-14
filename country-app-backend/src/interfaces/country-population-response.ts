import { CountriesNowResponse } from "./countries-now-response";

export type CountryPopulationResponse = CountriesNowResponse<
  {
    country: string;
    code: string;
    iso3: string;
    populationCounts: {
      year: number;
      count: number;
    }[];
  }[]
>;
