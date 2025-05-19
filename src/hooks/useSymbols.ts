'use client'

import { useState, useEffect } from 'react'

export function useSymbols() {
  const [symbols, setSymbols] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSymbols = async () => {
      setLoading(true)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/symbols`)
        const data = await response.json()
        setSymbols(data.symbols || [])
      } catch (error) {
        console.error("Error fetching symbols:", error)
        setSymbols([])
      } finally {
        setLoading(false)
      }
    }

    fetchSymbols()
  }, [])

  const getFilteredSymbols = (searchTerm: string) => {
    if (!searchTerm || !symbols) return []
    return symbols.filter(symbol => 
      symbol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return {
    symbols,
    loading,
    getFilteredSymbols
  }
} 