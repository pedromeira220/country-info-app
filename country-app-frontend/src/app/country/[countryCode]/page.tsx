import { CountryPage } from './country-page'

export default async function CountryInfoPage({
  params,
}: {
  params: Promise<{ countryCode: string }>
}) {
  const countryCode = (await params).countryCode

  return <CountryPage countryCode={countryCode} />
}
