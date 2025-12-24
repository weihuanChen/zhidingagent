import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/types"

interface InsightsFeaturedProps {
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

export function InsightsFeatured({ articles }: InsightsFeaturedProps) {
  const featured = articles.slice(0, 4)

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
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <Badge variant="outline" className="text-xs">
                  {article.categoryName || article.categorySlug || "insights"}
                </Badge>
                <span className="font-mono text-xs text-muted-foreground">{formatDate(article.date)}</span>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="mb-4 leading-relaxed text-muted-foreground">{article.description}</p>

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
