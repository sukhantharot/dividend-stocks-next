'use client'
import { useState } from 'react'

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

interface DividendResponse {
  symbol: string
  dividends: DividendRecord[]
  timestamp: number
}

export function useDividendData() {
  const [searchSymbol, setSearchSymbol] = useState("")
  const [dividendData, setDividendData] = useState<DividendResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchDividendData = async (symbol: string) => {
    if (!symbol) return
    setLoading(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dividends-panphor?symbol=${symbol}`)
      const data = await response.json()
      setDividendData(data)
    } catch (error) {
      console.error("Error fetching dividend data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    fetchDividendData(searchSymbol.toUpperCase())
  }

  return {
    searchSymbol,
    setSearchSymbol,
    dividendData,
    loading,
    handleSearch
  }
}

export type { DividendRecord, DividendResponse } 