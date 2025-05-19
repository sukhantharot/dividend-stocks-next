'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { YearSelector } from "@/components/YearSelector"
import { useEffect, useState } from "react"

interface DividendRecord {
  symbol: string
  year: string
  quarter: string
  yield_percent: string
  amount: string
  xd_date: string
  pay_date: string
  type: string
  scraped_at: number
}

interface SummaryItem {
  symbol: string
  latest_dividend: DividendRecord
}

interface SummaryResponse {
  summary: SummaryItem[]
  year: string
  timestamp: number
}

export function DividendSummary() {
  const [year, setYear] = useState("2567")
  const [summary, setSummary] = useState<SummaryResponse | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dividends-summary?year=${year}`)
        const data = await response.json()
        setSummary(data)
      } catch (error) {
        console.error("Error fetching summary:", error)
        setSummary(null)
      } finally {
        setLoading(false)
      }
    }

    fetchSummary()
  }, [year])

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Thai Stock Dividend Summary</h1>
        <YearSelector defaultValue={year} onYearChange={setYear} />
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : summary?.summary ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {summary.summary.map((item: SummaryItem) => (
            <Card key={item.symbol}>
              <CardHeader>
                <CardTitle>{item.symbol}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Latest Dividend: {item.latest_dividend.amount} บาท</p>
                  <p>Yield: {item.latest_dividend.yield_percent}%</p>
                  <p>XD Date: {item.latest_dividend.xd_date}</p>
                  <p>Pay Date: {item.latest_dividend.pay_date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center">No data available</div>
      )}
    </div>
  )
} 