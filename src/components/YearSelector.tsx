'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type YearSelectorProps = {
  defaultValue: string
  onYearChange?: (year: string) => void
}

export function YearSelector({ defaultValue, onYearChange }: YearSelectorProps) {
  return (
    <Select defaultValue={defaultValue} onValueChange={onYearChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select year" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="2568">2568</SelectItem>
        <SelectItem value="2567">2567</SelectItem>
        <SelectItem value="2566">2566</SelectItem>
        <SelectItem value="2565">2565</SelectItem>
        <SelectItem value="2564">2564</SelectItem>
        <SelectItem value="2563">2563</SelectItem>
        <SelectItem value="2562">2562</SelectItem>
        <SelectItem value="2561">2561</SelectItem>
        <SelectItem value="2560">2560</SelectItem>
        <SelectItem value="2559">2559</SelectItem>
        <SelectItem value="2558">2558</SelectItem>
        <SelectItem value="2557">2557</SelectItem>
        <SelectItem value="2556">2556</SelectItem>
        <SelectItem value="2555">2555</SelectItem>
        <SelectItem value="2554">2554</SelectItem>
      </SelectContent>
    </Select>
  )
} 