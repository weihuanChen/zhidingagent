import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { FitStatement } from "@/components/about/fit-statement"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "关于我们 | 知定智能 - SEO架构顾问",
  description:
    "专注于 SEO-first 网站结构设计、长期搜索增长以及 AI-ready 信息架构。为制造业与品牌型企业提供网站建设、SEO 顾问及长期运营支持。",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <FitStatement />
      </main>
      <Footer />
    </>
  )
}
