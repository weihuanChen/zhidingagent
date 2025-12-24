import Link from "next/link"
import { ArrowRight } from "lucide-react"

const readingPaths = [
  {
    id: "new-to-seo",
    title: "SEO 新手",
    description: "如果你刚开始接触 SEO，或需要建立系统性的认知框架，建议按以下顺序阅读：",
    articles: [
      { title: "SEO 的本质：为什么结构比内容更重要", href: "/insights/seo-fundamentals-1" },
      { title: "关键词研究：从搜索意图到内容规划", href: "/insights/seo-fundamentals-2" },
      { title: "内容优化：为搜索而写，为用户而写", href: "/insights/seo-fundamentals-3" },
    ],
  },
  {
    id: "planning-website",
    title: "规划网站",
    description: "如果你正在规划新网站或重构现有网站，这些文章会帮助你建立 SEO 友好的架构：",
    articles: [
      { title: "网站架构设计：为 SEO 而建，而非事后优化", href: "/insights/website-architecture-1" },
      { title: "URL 结构设计：清晰、可预测、SEO 友好", href: "/insights/website-architecture-2" },
      { title: "内部链接策略：构建内容关系网络", href: "/insights/website-architecture-3" },
    ],
  },
  {
    id: "exploring-ai-search",
    title: "探索 AI 搜索",
    description: "如果你关注 AI 搜索趋势，想了解如何让内容在 AI 时代更容易被发现：",
    articles: [
      { title: "AI 搜索时代的 SEO：从关键词到意图理解", href: "/insights/ai-ready-1" },
      { title: "结构化数据：让 AI 理解你的内容", href: "/insights/ai-ready-schema" },
    ],
  },
]

export function InsightsReadingGuide() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">READING GUIDE</span>
        </div>

        <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">阅读指南</h2>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          根据你的阅读目标，我们推荐以下阅读路径。这些路径帮助你系统性地建立认知，而非零散地获取技巧。
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {readingPaths.map((path) => (
            <div key={path.id} className="rounded-lg border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">{path.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{path.description}</p>

              <ul className="space-y-3">
                {path.articles.map((article, index) => (
                  <li key={index}>
                    <Link
                      href={article.href}
                      className="group flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-medium text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                        {index + 1}
                      </span>
                      <span className="flex-1 leading-relaxed">{article.title}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
