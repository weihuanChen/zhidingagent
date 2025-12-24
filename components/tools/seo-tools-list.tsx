import { ExternalLink, TreePine, Network, AlertTriangle, BarChart3 } from "lucide-react"
import Link from "next/link"

const seoTools = [
  {
    name: "Screaming Frog",
    description: "拍摄网站层级树状图",
    url: "https://www.screamingfrog.co.uk/seo-spider/",
    icon: TreePine,
    category: "网站爬虫",
  },
  {
    name: "Ahrefs Site Audit",
    description: "可生成架构爬虫图",
    url: "https://ahrefs.com/site-audit",
    icon: Network,
    category: "技术审计",
  },
  {
    name: "Semrush Site Audit",
    description: "自动显示结构问题/图表",
    url: "https://www.semrush.com/site-audit/",
    icon: AlertTriangle,
    category: "技术审计",
  },
  {
    name: "Similarweb",
    description: "网站目录分布截图",
    url: "https://www.similarweb.com/",
    icon: BarChart3,
    category: "流量分析",
  },
]

export function SeoToolsList() {
  return (
    <section className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            SEO 检测工具导航
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            精选专业 SEO 工具，帮助您全面分析网站结构、技术问题和流量表现
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {seoTools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                  {tool.name}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>

                <div className="mt-auto">
                  <span className="inline-block rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-muted/30 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">提示：</span>
            这些工具可以帮助您深入了解网站的技术状况和流量表现。建议定期使用这些工具进行网站健康检查。
          </p>
        </div>
      </div>
    </section>
  )
}

