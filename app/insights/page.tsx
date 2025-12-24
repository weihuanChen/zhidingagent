import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InsightsHero } from "@/components/insights/insights-hero"
import { InsightsCategories } from "@/components/insights/insights-categories"
import { InsightsFeatured } from "@/components/insights/insights-featured"
import { InsightsArticleList } from "@/components/insights/insights-article-list"
import { InsightsReadingGuide } from "@/components/insights/insights-reading-guide"
import { getPostsByCategoryFromCMS, getTagsByIdsFromCMS } from "@/lib/cms-blog"
import type { BlogPost } from "@/lib/types"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "知识库 | 知定智能 - SEO 与网站架构知识体系",
  description:
    "专注于决策思考、系统架构和长期增长的 SEO 知识库。涵盖 SEO 基础、网站架构、制造业与品牌 SEO，以及 AI 就绪搜索。适合企业主、营销负责人和品牌团队。",
  keywords: "SEO 知识库, 网站架构, SEO 策略, 制造业 SEO, 品牌 SEO, AI 搜索, SEO 基础",
}

export default async function InsightsPage() {
  const insightsArticles: BlogPost[] = await getPostsByCategoryFromCMS("insights", "zh")
  const insightTags = await getTagsByIdsFromCMS([142, 141, 140, 139], "zh")

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <InsightsHero />
        <InsightsCategories tags={insightTags} />
        <InsightsFeatured articles={insightsArticles} />
        <InsightsArticleList articles={insightsArticles} />
        <InsightsReadingGuide />
      </main>
      <Footer />
    </>
  )
}
