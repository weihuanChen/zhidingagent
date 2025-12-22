import Link from "next/link"
import { Badge } from "@/components/ui/badge"

// 示例数据 - 后续可以从 CMS 或数据文件加载
const articles = [
  {
    id: "seo-fundamentals-2",
    title: "关键词研究：从搜索意图到内容规划",
    summary: "关键词研究不仅是找高流量词，更是理解用户意图和内容缺口的过程。本文提供一套系统性的关键词研究方法。",
    category: "SEO 基础与策略",
    categoryId: "seo-fundamentals",
    date: "2024-01-20",
    href: "/insights/seo-fundamentals-2",
  },
  {
    id: "website-architecture-2",
    title: "URL 结构设计：清晰、可预测、SEO 友好",
    summary: "URL 结构是网站信息架构的体现。好的 URL 结构能让用户和搜索引擎都更容易理解网站内容组织。",
    category: "网站架构与结构",
    categoryId: "website-architecture",
    date: "2024-01-18",
    href: "/insights/website-architecture-2",
  },
  {
    id: "manufacturing-seo-2",
    title: "B2B 制造业的内容策略：从技术文档到案例研究",
    summary: "制造业客户需要的内容类型与消费品不同。本文探讨如何构建技术文档、案例研究和产品应用场景的内容体系。",
    category: "制造业与品牌 SEO",
    categoryId: "manufacturing-brand-seo",
    date: "2024-01-12",
    href: "/insights/manufacturing-seo-2",
  },
  {
    id: "ai-ready-2",
    title: "结构化数据：让 AI 理解你的内容",
    summary: "在 AI 搜索时代，结构化数据的作用从 SEO 信号转变为内容理解的基础。本文介绍如何正确使用 Schema.org 标记。",
    category: "AI 就绪搜索与 GEO",
    categoryId: "ai-ready-search",
    date: "2024-01-08",
    href: "/insights/ai-ready-2",
  },
  {
    id: "seo-fundamentals-3",
    title: "内容优化：为搜索而写，为用户而写",
    summary: "好的 SEO 内容既要满足搜索引擎的抓取需求，也要真正解决用户问题。本文探讨如何平衡两者。",
    category: "SEO 基础与策略",
    categoryId: "seo-fundamentals",
    date: "2024-01-03",
    href: "/insights/seo-fundamentals-3",
  },
  {
    id: "website-architecture-3",
    title: "内部链接策略：构建内容关系网络",
    summary: "内部链接不仅是导航工具，更是内容关系网络的体现。本文介绍如何设计内部链接策略，提升网站整体 SEO 表现。",
    category: "网站架构与结构",
    categoryId: "website-architecture",
    date: "2023-12-28",
    href: "/insights/website-architecture-3",
  },
]

export function InsightsArticleList() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">ALL ARTICLES</span>
        </div>

        <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">全部文章</h2>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {article.category}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">{article.date}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground">{article.summary}</p>
            </Link>
          ))}
        </div>

        {/* 分页提示 - 当内容增长时可以添加 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">更多内容持续更新中</p>
        </div>
      </div>
    </section>
  )
}

