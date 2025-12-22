"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"

export type CaseCategory = "all" | "practice" | "client" | "demo"

const categories = [
  { id: "all" as CaseCategory, label: "全部案例", count: 0 },
  { id: "practice" as CaseCategory, label: "个人实践项目", count: 0 },
  { id: "client" as CaseCategory, label: "匿名客户项目", count: 0 },
  { id: "demo" as CaseCategory, label: "SEO结构演示", count: 0 },
]

interface CaseCategoriesProps {
  activeCategory: CaseCategory
  onCategoryChange: (category: CaseCategory) => void
  categoryCounts: Record<CaseCategory, number>
}

export function CaseCategories({
  activeCategory,
  onCategoryChange,
  categoryCounts,
}: CaseCategoriesProps) {
  const categoriesWithCounts = categories.map((cat) => ({
    ...cat,
    count: categoryCounts[cat.id] || 0,
  }))

  return (
    <div className="flex flex-wrap gap-3 border-b border-border pb-6">
      {categoriesWithCounts.map((category) => (
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
          {category.count > 0 && (
            <Badge
              variant="secondary"
              className={`ml-1 rounded-full text-xs ${
                activeCategory === category.id ? "bg-primary/20 text-primary" : ""
              }`}
            >
              {category.count}
            </Badge>
          )}
        </button>
      ))}
    </div>
  )
}

