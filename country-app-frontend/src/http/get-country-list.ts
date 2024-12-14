import { Country } from '@/interfaces/country'
import { api } from '@/lib/api'

interface GetCountryListResponse {
  countryList: Country[]
}

export const getCountryList = async () => {
  return api.get<GetCountryListResponse>('/countries')
}
