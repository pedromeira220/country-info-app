import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AvailableCountryList } from "src/interfaces/available-country-list";
import { CountryFlagImagesResponse } from "src/interfaces/country-flag-images-response";
import { CountryPopulationResponse } from "src/interfaces/country-population-response";
import { DateNagerCountryInfo } from "src/interfaces/date-nager-country-info";

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  async getAvailableCountries() {
    const response = await this.httpService.axiosRef.get<AvailableCountryList>(
      "https://date.nager.at/api/v3/AvailableCountries",
    );

    const countryList = response.data;

    return countryList;
  }

  async getCountryInfo(countryCode: string) {
    const dateNagerResponse =
      await this.httpService.axiosRef.get<DateNagerCountryInfo>(
        `https://date.nager.at/api/v3/CountryInfo/${countryCode}`,
      );

    const countryFlagResponse =
      await this.httpService.axiosRef.get<CountryFlagImagesResponse>(
        "https://countriesnow.space/api/v0.1/countries/flag/images",
      );

    const countryPopulationResponse =
      await this.httpService.axiosRef.get<CountryPopulationResponse>(
        "https://countriesnow.space/api/v0.1/countries/population",
      );

    const countryFound = countryFlagResponse.data.data.find(
      (country) => country.iso2 === countryCode,
    );

    const countryFlagUrl = countryFound?.flag;
    const countryIso3 = countryFound?.iso3;

    console.log({
      countryIso3,
      countryPopulationResponse: countryPopulationResponse.data.data,
    });

    const populationCounts = countryPopulationResponse.data.data.find(
      (country) => country.iso3 === countryIso3,
    )?.populationCounts;

    const dateNagerCountryInfo = dateNagerResponse.data;
    const borderCountries = dateNagerCountryInfo.borders;

    return {
      commonName: dateNagerCountryInfo.commonName,
      officialName: dateNagerCountryInfo.officialName,
      countryCode: dateNagerCountryInfo.countryCode,
      region: dateNagerCountryInfo.region,
      countryFlagUrl,
      borderCountries,
      populationCounts,
    };
  }
}
