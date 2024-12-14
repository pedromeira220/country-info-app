import { CountryService } from "./country.service";
import { Controller, Get, Param } from "@nestjs/common";

@Controller("countries")
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  async getCountryList() {
    const countryList = await this.countryService.getAvailableCountries();

    return {
      countryList,
    };
  }

  @Get(":countryCode")
  async getCountryInfo(@Param("countryCode") countryCode: string) {
    const countryInfo = await this.countryService.getCountryInfo(countryCode);

    return countryInfo;
  }
}
