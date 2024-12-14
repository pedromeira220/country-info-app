'use client'

import { CountryList } from '@/components/country-list'
import { CountryPopulationChart } from '@/components/country-population-chart'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { getCountryInfo } from '@/http/get-country-info'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'

interface CountryPageProps {
  countryCode: string
}

export const CountryPage: React.FC<CountryPageProps> = ({ countryCode }) => {
  const { data: countryInfo, isLoading } = useQuery({
    queryKey: ['country', countryCode],
    queryFn: async () => {
      const response = await getCountryInfo({ countryCode })

      return response.data
    },
  })

  if (isLoading || !countryInfo) {
    return (
      <div className="mx-auto max-w-4xl mt-5 flex flex-col gap-10">
        <h2 className="font-semibold text-xl">Loading country...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="mx-auto max-w-4xl mt-5 flex flex-col gap-10">
        <Link href="/">
          <div className="flex items-center gap-1">
            <ArrowLeft size={16} />
            <p className="font-semibold">Go back</p>
          </div>
        </Link>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-2">
              <CardTitle>{countryInfo?.commonName}</CardTitle>
              <div className="flex flex-col">
                <CardDescription>
                  Country region: {countryInfo.region}
                </CardDescription>
                <CardDescription>
                  Country official name: {countryInfo.officialName}
                </CardDescription>
              </div>
            </div>

            {countryInfo?.countryFlagUrl ? (
              <Image
                alt={`${countryInfo?.commonName}'s flag`}
                src={countryInfo?.countryFlagUrl}
                width={80}
                height={50}
              />
            ) : null}
          </CardHeader>
        </Card>

        {countryInfo?.populationCounts ? (
          <CountryPopulationChart
            chartData={countryInfo?.populationCounts || []}
          />
        ) : null}

        <div className="flex flex-col gap-5 mt-5 px-4">
          <h2 className="font-semibold text-xl">Border country list</h2>

          <CountryList
            countryList={(countryInfo?.borderCountries || []).map((country) => {
              return {
                countryCode: country.countryCode,
                name: country.commonName,
              }
            })}
          />
        </div>
      </div>
    </div>
  )
}
