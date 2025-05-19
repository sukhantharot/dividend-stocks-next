'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter, useSearchParams } from "next/navigation"

interface YearSelectorProps {
  defaultValue: string
  onYearChange?: (year: string) => void
}

export function YearSelector({ defaultValue, onYearChange }: YearSelectorProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleYearChange = (value: string) => {
    if (onYearChange) {
      onYearChange(value)
    }
    const params = new URLSearchParams(searchParams)
    params.set('year', value)
    router.push(`?${params.toString()}`)
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={handleYearChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2567">2567</SelectItem>
        <SelectItem value="2566">2566</SelectItem>
        <SelectItem value="2565">2565</SelectItem>
      </SelectContent>
    </Select>
  )
} 