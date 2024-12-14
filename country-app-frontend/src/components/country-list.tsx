import React, { useMemo, useState } from 'react'

import { Card, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { Country } from '@/interfaces/country'
import { Input } from './ui/input'

interface CountryListProps {
  countryList: Country[] | undefined
  isLoading?: boolean
  hasSearchInput?: boolean
}

export const CountryList: React.FC<CountryListProps> = ({
  countryList,
  isLoading = false,
  hasSearchInput,
}) => {
  const [searchInputValue, setSearchInputValue] = useState('')

  const filteredCountryList = useMemo(() => {
    if (!countryList) {
      return []
    }

    return searchInputValue
      ? countryList.filter((country) =>
          country.name.toLowerCase().includes(searchInputValue.toLowerCase()),
        )
      : countryList
  }, [searchInputValue, countryList])

  if (!countryList || isLoading) {
    return <p>Loading countries...</p>
  }

  return (
    <div className="flex flex-col gap-3">
      {hasSearchInput ? (
        <Input
          value={searchInputValue}
          onChange={(e) => {
            setSearchInputValue(e.target.value)
          }}
          placeholder="Start typing a country name"
        />
      ) : null}

      {hasSearchInput && filteredCountryList.length === 0 ? (
        <p>No countries found</p>
      ) : null}

      <div className="flex flex-col gap-2">
        {filteredCountryList.map((country) => {
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
    </div>
  )
}
