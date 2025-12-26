"use client"

import { Badge } from "@/components/ui/badge"

export type CaseCategory = "all" | "practice" | "client" | "demo"

export interface CaseCategoryItem {
  id: CaseCategory
  label: string
}

interface CaseCategoriesProps {
  activeCategory: CaseCategory
  onCategoryChange: (category: CaseCategory) => void
  categoryCounts: Record<CaseCategory, number>
  categories: CaseCategoryItem[]
}

export function CaseCategories({
  activeCategory,
  onCategoryChange,
  categoryCounts,
  categories,
}: CaseCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-3 border-b border-border pb-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`group flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? "border-primary bg-primary/5 text-primary"
              : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          {category.label}
          {categoryCounts[category.id] > 0 && (
            <Badge
              variant="secondary"
              className={`ml-1 rounded-full text-xs ${
                activeCategory === category.id ? "bg-primary/20 text-primary" : ""
              }`}
            >
              {categoryCounts[category.id]}
            </Badge>
          )}
        </button>
      ))}
    </div>
  )
}
