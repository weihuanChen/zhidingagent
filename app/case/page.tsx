"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseHero } from "@/components/case/case-hero"
import { CaseCategories, type CaseCategory } from "@/components/case/case-categories"
import { CaseCard, type Case } from "@/components/case/case-card"
import { CaseClosing } from "@/components/case/case-closing"
import { caseList } from "@/lib/case-data"

export default function CasePage() {
  const [activeCategory, setActiveCategory] = useState<CaseCategory>("all")

  // 计算每个分类的数量
  const categoryCounts = useMemo(() => {
    const counts: Record<CaseCategory, number> = {
      all: caseList.length,
      practice: caseList.filter((c) => c.type === "practice").length,
      client: caseList.filter((c) => c.type === "client").length,
      demo: caseList.filter((c) => c.type === "demo").length,
    }
    return counts
  }, [])

  // 过滤案例
  const filteredCases = useMemo(() => {
    if (activeCategory === "all") {
      return caseList
    }
    return caseList.filter((c) => c.type === activeCategory)
  }, [activeCategory])

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CaseHero />
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <CaseCategories
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              categoryCounts={categoryCounts}
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <CaseClosing />
      </main>
      <Footer />
    </>
  )
}

