import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

// 示例数据 - 后续可以从 CMS 或数据文件加载
const featuredArticles = [
  {
    id: "seo-fundamentals-1",
    title: "SEO 的本质：为什么结构比内容更重要",
    summary: "理解 SEO 不是内容营销的延伸，而是网站架构的基础。这篇文章解释为什么正确的结构能让搜索引擎理解你的网站，以及如何从第一天就建立 SEO 友好的架构。",
    category: "SEO 基础与策略",
    categoryId: "seo-fundamentals",
    date: "2024-01-15",
    href: "/insights/seo-fundamentals-1",
  },
  {
    id: "website-architecture-1",
    title: "网站架构设计：为 SEO 而建，而非事后优化",
    summary: "大多数 SEO 问题源于建站阶段的架构缺陷。本文提供一套系统性的网站架构设计方法，帮助你在建站前就规划好 URL 结构、信息层级和内部链接策略。",
    category: "网站架构与结构",
    categoryId: "website-architecture",
    date: "2024-01-10",
    href: "/insights/website-architecture-1",
  },
  {
    id: "manufacturing-seo-1",
    title: "制造业 SEO：从产品页面到获客路径",
    summary: "制造业客户的 SEO 策略与消费品不同。本文探讨如何优化产品页面、建立技术内容体系，以及设计适合 B2B 决策周期的内容路径。",
    category: "制造业与品牌 SEO",
    categoryId: "manufacturing-brand-seo",
    date: "2024-01-05",
    href: "/insights/manufacturing-seo-1",
  },
  {
    id: "ai-ready-1",
    title: "AI 搜索时代的 SEO：从关键词到意图理解",
    summary: "随着 AI 搜索的普及，SEO 正在从关键词匹配转向意图理解。本文探讨如何让你的内容在 AI 搜索中更容易被发现和引用，以及结构化数据的新作用。",
    category: "AI 就绪搜索与 GEO",
    categoryId: "ai-ready-search",
    date: "2024-01-01",
    href: "/insights/ai-ready-1",
  },
]

export function InsightsFeatured() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">FEATURED</span>
        </div>

        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">推荐阅读</h2>
            <p className="text-muted-foreground">适合新读者的基础文章，从这里开始建立系统性认知</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredArticles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {article.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="mb-4 leading-relaxed text-muted-foreground">{article.summary}</p>

              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                阅读全文
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

