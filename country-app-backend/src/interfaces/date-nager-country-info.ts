export interface DateNagerCountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders:
    | null
    | {
        commonName: string;
        officialName: string;
        countryCode: string;
        region: string;
        borders: null;
      }[];
}
