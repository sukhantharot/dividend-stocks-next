'use client'

import { DividendResponse } from "@/hooks/useDividendData"
import { DividendCard } from "./DividendCard"

type DividendListProps = {
  dividendData: DividendResponse
}

export function DividendList({ dividendData }: DividendListProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">{dividendData.symbol}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dividendData.dividends.map((dividend, index) => (
          <DividendCard key={index} dividend={dividend} />
        ))}
      </div>
    </div>
  )
} 