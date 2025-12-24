import { Badge } from "@/components/ui/badge"
import type { Tag } from "@/lib/directus"

const fallbackMeta: Record<string, { title: string; description: string; order: number }> = {
  "seo-fundamentals": {
    title: "SEO 基础与策略",
    description:
      "理解搜索引擎工作原理、关键词策略、内容优化和长期 SEO 规划。适合刚开始接触 SEO 或需要建立系统性认知的读者。",
    order: 3,
  },
  "website-architecture": {
    title: "网站架构与结构",
    description: "网站技术架构、信息架构、URL 结构、内部链接策略。帮助你在建站阶段就建立 SEO 友好的基础结构。",
    order: 2,
  },
  "seo-brand": {
    title: "制造业与品牌 SEO",
    description: "针对制造业和品牌客户的 SEO 实践：产品页面优化、品牌搜索策略、B2B 获客路径。",
    order: 1,
  },
  "ai-ready": {
    title: "AI 就绪搜索与 GEO",
    description: "AI 搜索时代的内容策略、结构化数据、本地搜索优化（GEO）和未来搜索趋势。",
    order: 0,
  },
}

interface InsightsCategoriesProps {
  tags: Tag[]
}

export function InsightsCategories({ tags }: InsightsCategoriesProps) {
  const categories = tags
    .map((tag) => {
      const meta = fallbackMeta[tag.slug || ""]
      return {
        id: tag.id,
        slug: tag.slug,
        title: tag.name || tag.slug || "标签",
        description: meta?.description ?? "",
        order: meta?.order ?? 99,
      }
    })
    .sort((a, b) => a.order - b.order)

  return (
    <section className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">CATEGORIES</span>
        </div>

        <h2 className="mb-12 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">内容分类</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <div key={category.slug || category.id} className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 flex items-center justify-between">
                <Badge variant="outline" className="font-mono text-xs">
                  {category.slug?.toUpperCase().replace(/-/g, " ") || category.id}
                </Badge>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">{category.title}</h3>

              <p className="leading-relaxed text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
