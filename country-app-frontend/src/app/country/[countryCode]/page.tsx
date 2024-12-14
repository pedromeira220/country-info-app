import { CountryList } from '@/components/country-list'
import { CountryPopulationChart } from '@/components/country-population-chart'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default async function CountryInfoPage({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const countryCode = (await params).countryCode
  const countryName = 'Argentina'

  return (
    <div>
      <div className="mx-auto max-w-4xl mt-5 flex flex-col gap-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Argentina</CardTitle>

            <Image
              alt={`${countryName}'s flag`}
              src={
                'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'
              }
              width={80}
              height={50}
            />
          </CardHeader>
        </Card>

        <CountryPopulationChart />

        <div className="flex flex-col gap-5 mt-5 px-4">
          <h2 className="font-semibold text-xl">Border country list</h2>

          <CountryList />
        </div>
      </div>
    </div>
  )
}
