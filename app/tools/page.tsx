import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolsHero } from "@/components/tools/tools-hero"
import { SeoToolsList } from "@/components/tools/seo-tools-list"

export const metadata: Metadata = {
  title: "SEO检测工具导航 | 知定智能 - 专业SEO分析工具集合",
  description:
    "精选全球领先的SEO检测工具，包括Screaming Frog、Ahrefs Site Audit、Semrush Site Audit和Similarweb等，帮助您全面分析网站结构和技术问题。",
  keywords: "SEO工具, 网站检测, Screaming Frog, Ahrefs, Semrush, Similarweb, SEO分析, 网站爬虫",
}

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main>
        <ToolsHero />
        <SeoToolsList />
      </main>
      <Footer />
    </>
  )
}

