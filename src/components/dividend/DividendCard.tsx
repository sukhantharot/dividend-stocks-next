'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DividendRecord } from "@/hooks/useDividendData"

interface DividendCardProps {
  dividend: DividendRecord
}

export function DividendCard({ dividend }: DividendCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {dividend.year} Q{dividend.quarter}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Amount: {dividend.amount} บาท</p>
          <p>Yield: {dividend.yield_percent}%</p>
          <p>XD Date: {dividend.xd_date}</p>
          <p>Pay Date: {dividend.pay_date}</p>
          <p>Type: {dividend.type}</p>
        </div>
      </CardContent>
    </Card>
  )
} 