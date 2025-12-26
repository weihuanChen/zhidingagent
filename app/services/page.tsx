import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { GrowthTimeline } from "@/components/services/growth-timeline"
import { ServiceModels } from "@/components/services/service-models"
import { ServiceComparison } from "@/components/services/service-comparison"
import { DecisionGuide } from "@/components/services/decision-guide"
import { ServicesCta } from "@/components/services/services-cta"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "SEO服务方案 | 知定智能 - 从建站到长期增长的完整路径",
  description:
    "了解SEO如何在6-12个月内建立稳定的自然流量系统。从网站建设、SEO顾问到年度运营，选择适合您增长阶段的服务模式。",
  keywords: "SEO服务, 网站建设, SEO顾问, 年度运营, 制造业SEO, 品牌SEO, 自然流量",
  alternates: {
    canonical: `${baseUrl}/services`,
  },
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <GrowthTimeline />
        <ServiceModels />
        <ServiceComparison />
        <DecisionGuide />
        <ServicesCta />
      </main>
      <Footer />
    </>
  )
}
