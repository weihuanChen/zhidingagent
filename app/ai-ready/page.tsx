import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AiReadyHero } from "@/components/ai-ready/ai-ready-hero"
import { WhyTraditionalSeoFails } from "@/components/ai-ready/why-traditional-seo-fails"
import { WhatAiReadyMeans } from "@/components/ai-ready/what-ai-ready-means"
import { AiReadyPrinciples } from "@/components/ai-ready/ai-ready-principles"
import { GeoPerspective } from "@/components/ai-ready/geo-perspective"
import { SeoIntegration } from "@/components/ai-ready/seo-integration"
import { WhoThisIsFor } from "@/components/ai-ready/who-this-is-for"
import { AiReadyClosing } from "@/components/ai-ready/ai-ready-closing"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "AI就绪 | 知定智能 - 面向未来的搜索架构",
  description:
    "搜索正在改变。了解为什么传统SEO不再足够，以及如何构建AI就绪、GEO感知的网站结构，为未来的发现做好准备。",
  alternates: {
    canonical: `${baseUrl}/ai-ready`,
  },
}

export default function AiReadyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AiReadyHero />
        <WhyTraditionalSeoFails />
        <WhatAiReadyMeans />
        <AiReadyPrinciples />
        <GeoPerspective />
        <SeoIntegration />
        <WhoThisIsFor />
        <AiReadyClosing />
      </main>
      <Footer />
    </>
  )
}

