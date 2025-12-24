import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/types"

interface InsightsArticleListProps {
  articles: BlogPost[]
}

const formatDate = (value?: string) => {
  if (!value) return ""
  try {
    return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" }).format(
      new Date(value)
    )
  } catch (err) {
    return value
  }
}

export function InsightsArticleList({ articles }: InsightsArticleListProps) {
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
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {article.categoryName || article.categorySlug || "insights"}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">{formatDate(article.date)}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="leading-relaxed text-muted-foreground">{article.description}</p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                阅读全文 →
              </span>
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
