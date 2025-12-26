"use client"

import { useMemo, useState } from "react"
import { CaseCategories, type CaseCategory, type CaseCategoryItem } from "./case-categories"
import { CaseCard, type Case } from "./case-card"

interface CaseListSectionProps {
  cases: Case[]
  categories: CaseCategoryItem[]
}

export function CaseListSection({ cases, categories }: CaseListSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CaseCategory>("all")

  const categoryCounts = useMemo(() => {
    const counts: Record<CaseCategory, number> = {
      all: cases.length,
      practice: cases.filter((c) => c.categories?.includes("practice")).length,
      client: cases.filter((c) => c.categories?.includes("client")).length,
      demo: cases.filter((c) => c.categories?.includes("demo")).length,
    }
    return counts
  }, [cases])

  const filteredCases = useMemo(() => {
    if (activeCategory === "all") return cases
    const category = activeCategory as Exclude<CaseCategory, "all">
    return cases.filter((c) => c.categories?.includes(category))
  }, [cases, activeCategory])

  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <CaseCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          categoryCounts={categoryCounts}
          categories={categories}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filteredCases.map((caseItem) => (
            <CaseCard key={caseItem.id} case={caseItem} />
          ))}
        </div>

        {filteredCases.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">该分类下暂无案例</p>
          </div>
        )}
      </div>
    </section>
  )
}
