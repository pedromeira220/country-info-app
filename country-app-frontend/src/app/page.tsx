import { CountryList } from '@/components/country-list'

export default function Home() {
  return (
    <div>
      <div className="max-w-lg mx-auto flex flex-col gap-5 mt-5 px-4">
        <h2 className="font-semibold text-xl">Country list</h2>

        <CountryList />
      </div>
    </div>
  )
}
