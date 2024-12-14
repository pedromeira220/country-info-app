import React from 'react'

import { Card, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { Country } from '@/interfaces/country'

interface CountryListProps {
  countryList: Country[] | undefined
  isLoading?: boolean
}

export const CountryList: React.FC<CountryListProps> = ({
  countryList,
  isLoading = false,
}) => {
  if (!countryList || isLoading) {
    return <p>Loading countries...</p>
  }

  return (
    <div className="flex flex-col gap-2">
      {countryList.map((country) => {
        return (
          <Link
            href={`/country/${country.countryCode}`}
            key={country.countryCode}
          >
            <Card>
              <CardHeader className="flex justify-between flex-row items-center">
                <p className="text-lg font-semibold leading-none tracking-tight">
                  {country.name}
                </p>

                <p>{country.countryCode}</p>
              </CardHeader>
            </Card>
          </Link>
        )
      })}
    </div>
  )
}
