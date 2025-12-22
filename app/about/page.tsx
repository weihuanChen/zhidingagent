import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { ThinkingEvolution } from "@/components/about/thinking-evolution"
import { WorkingPrinciples } from "@/components/about/working-principles"
import { FitStatement } from "@/components/about/fit-statement"

export const metadata: Metadata = {
  title: "关于 | 知定智能 - SEO架构顾问",
  description:
    "了解知定智能的方法论演进：从网站建设到SEO架构，从搜索优化到AI就绪。专注制造业与品牌客户的长期有机增长。",
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <ThinkingEvolution />
        <WorkingPrinciples />
        <FitStatement />
      </main>
      <Footer />
    </>
  )
}
