import { api } from '@/lib/api'

interface GetCountryInfoResponse {
  commonName: string
  officialName: string
  countryCode: string
  region: string
  countryFlagUrl: string | undefined
  borderCountries:
    | {
        commonName: string
        officialName: string
        countryCode: string
        region: string
        borders:
          | null
          | {
              commonName: string
              officialName: string
              countryCode: string
              region: string
              borders: null
            }[]
      }[]
    | null
  populationCounts:
    | {
        year: number
        value: number
      }[]
    | undefined
}

interface GetCountryInfoRequest {
  countryCode: string
}

export const getCountryInfo = async ({
  countryCode,
}: GetCountryInfoRequest) => {
  return api.get<GetCountryInfoResponse>(`/countries/${countryCode}`)
}
