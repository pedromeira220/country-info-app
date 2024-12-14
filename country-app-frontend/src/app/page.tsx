'use client'

import { CountryList } from '@/components/country-list'
import { getCountryList } from '@/http/get-country-list'
import { useQuery } from 'react-query'

export default function Home() {
  const { data: countryList } = useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const response = await getCountryList()

      return response.data.countryList
    },
  })

  return (
    <div>
      <div className="max-w-lg mx-auto flex flex-col gap-5 mt-5 px-4">
        <h2 className="font-semibold text-xl">Country list</h2>

        <CountryList countryList={countryList} />
      </div>
    </div>
  )
}
