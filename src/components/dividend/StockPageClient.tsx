'use client'

import { useDividendData } from "@/hooks/useDividendData"
import { SearchForm } from "@/components/dividend/SearchForm"
import { DividendList } from "@/components/dividend/DividendList"

export function StockPageClient() {
  const {
    searchSymbol,
    setSearchSymbol,
    dividendData,
    loading,
    handleSearch
  } = useDividendData()

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Stock Dividend Details</h1>
      
      <SearchForm
        searchSymbol={searchSymbol}
        setSearchSymbol={setSearchSymbol}
        handleSearch={handleSearch}
      />

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : dividendData ? (
        <DividendList dividendData={dividendData} />
      ) : (
        <div className="text-center text-muted-foreground">
          Enter a stock symbol to view dividend details
        </div>
      )}
    </main>
  )
} 