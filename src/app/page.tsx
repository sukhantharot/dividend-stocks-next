import { DividendSummary } from "@/components/DividendSummary"

async function getInitialData() {
  const year = "2567" // Default year
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dividends-summary?year=${year}`, {
    cache: 'no-store' // Disable caching to always get fresh data
  })
  return response.json()
}

export default async function Home() {
  const initialData = await getInitialData()
  
  return (
    <main className="container mx-auto p-4">
      <DividendSummary initialData={initialData} />
    </main>
  )
}
