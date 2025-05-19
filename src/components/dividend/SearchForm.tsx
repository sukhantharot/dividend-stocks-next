'use client'
import { Input } from "@/components/ui/input"
import { useSymbols } from "@/hooks/useSymbols"
import { useState, useRef, useEffect, useMemo } from "react"

interface SearchFormProps {
  searchSymbol: string
  setSearchSymbol: (value: string) => void
  handleSearch: (e: React.FormEvent) => void
}

export function SearchForm({ searchSymbol, setSearchSymbol, handleSearch }: SearchFormProps) {
  const { getFilteredSymbols } = useSymbols()
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Use useMemo to compute filtered symbols only when searchSymbol changes
  const suggestions = useMemo(() => {
    return getFilteredSymbols(searchSymbol)
  }, [searchSymbol, getFilteredSymbols])

  // Update showSuggestions only when suggestions change
  useEffect(() => {
    setShowSuggestions(suggestions.length > 0)
  }, [suggestions])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSuggestionClick = (symbol: string) => {
    setSearchSymbol(symbol)
    setShowSuggestions(false)
  }

  return (
    <div className="relative" ref={suggestionsRef}>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter stock symbol (e.g., BANPU)"
            value={searchSymbol}
            onChange={(e) => setSearchSymbol(e.target.value)}
            className="max-w-sm"
            autoComplete="off"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Search
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="absolute z-10 w-full max-w-sm bg-white border rounded-md shadow-lg mt-1">
          {suggestions.map((symbol) => (
            <div
              key={symbol}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(symbol)}
            >
              {symbol}
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 