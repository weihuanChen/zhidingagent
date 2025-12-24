import { ArrowUpRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const caseStudies = [
  {
    id: 1,
    title: "精密机械制造商品牌官网",
    client: "华东精工",
    industry: "制造业",
    tags: ["B2B", "产品展示", "多语言"],
    metrics: [
      { label: "自然流量增长", value: "+280%" },
      { label: "询盘转化提升", value: "+150%" },
      { label: "页面加载时间", value: "0.8s" },
    ],
    description:
      "华东精工是一家专注精密零部件的制造商，产品好但一直苦于获客。我们帮他们重新梳理了200多个产品关键词，搭建了清晰的产品架构，上线3个月后海外询盘量翻了一倍多。",
    featured: true,
    structureHighlight: "产品词群覆盖 200+ 关键词",
  },
  {
    id: 2,
    title: "消费品牌电商独立站",
    client: "青山茶业",
    industry: "消费品",
    tags: ["DTC", "电商", "内容营销"],
    metrics: [
      { label: "核心词排名", value: "Top 3" },
      { label: "GMV增长", value: "+200%" },
    ],
    description:
      "传统茶叶品牌如何在线上找到年轻消费者？我们通过内容矩阵策略，让青山茶业在「送礼茶叶」等核心词上占据前三。",
    structureHighlight: "内容矩阵 50+ 专题页",
  },
  {
    id: 3,
    title: "工业设备B2B平台",
    client: "联合重工",
    industry: "工业",
    tags: ["B2B", "产品目录", "询盘系统"],
    metrics: [
      { label: "收录页面数", value: "2000+" },
      { label: "月均有效询盘", value: "300+" },
    ],
    description:
      "2000多个产品SKU，怎么让每一个都能被搜到？我们为联合重工设计了结构化的产品目录系统，配合技术文档SEO，实现了规模化的长尾流量获取。",
    structureHighlight: "产品SKU页面结构化",
  },
]

export function CaseStudies() {
  const featured = caseStudies.find((c) => c.featured)
  const secondary = caseStudies.filter((c) => !c.featured)

  return (
    <section id="cases" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">客户案例</span>
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              看看我们帮客户实现了什么
            </h2>
            <p className="mt-6 text-pretty text-lg leading-loose text-muted-foreground">
              每个项目背后都是一个真实的业务挑战。我们不追求炫技，只关注能带来实际增长的结果。
            </p>
          </div>
          <Link
            href="/case"
            className="group flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            查看更多案例
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {featured && <FeaturedCaseCard study={featured} />}

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {secondary.map((study) => (
            <SecondaryCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCaseCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="grid md:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col justify-between p-10">
          <div>
            {/* Tags */}
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge variant="default" className="rounded-md text-xs">
                精选案例
              </Badge>
              {study.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-md text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-foreground">{study.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {study.client} · {study.industry}
            </p>
            <p className="mt-5 leading-loose text-muted-foreground">{study.description}</p>

            {/* Structure highlight */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary">{study.structureHighlight}</span>
            </div>
          </div>

          {/* Metrics */}
          <div className="mt-10 flex gap-8 border-t border-border pt-8">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="flex items-center gap-1 text-2xl font-bold text-primary">
                  {metric.value.includes("+") && <TrendingUp className="h-4 w-4" />}
                  {metric.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative min-h-[300px] bg-secondary/50 p-8">
          {/* Architecture diagram visualization */}
          <div className="flex h-full flex-col justify-center">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">站点架构概览</div>
            <div className="mt-4 space-y-3">
              <ArchRow label="首页" pages="1" keywords="核心品牌词" />
              <ArchRow label="产品中心" pages="50+" keywords="产品词群" indent />
              <ArchRow label="解决方案" pages="12" keywords="场景词群" indent />
              <ArchRow label="案例中心" pages="30+" keywords="长尾词" indent />
              <ArchRow label="知识库" pages="100+" keywords="信息词群" indent />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ArchRow({
  label,
  pages,
  keywords,
  indent,
}: {
  label: string
  pages: string
  keywords: string
  indent?: boolean
}) {
  return (
    <div className={`flex items-center gap-3 ${indent ? "ml-4" : ""}`}>
      {indent && <div className="h-px w-3 bg-border" />}
      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
      <div className="flex flex-1 items-center justify-between rounded-md border border-border bg-card px-3 py-2">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground">{pages} 页</span>
          <span className="rounded bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground">{keywords}</span>
        </div>
      </div>
    </div>
  )
}

function SecondaryCard({ study }: { study: (typeof caseStudies)[number] }) {
  return (
    <article className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Tags */}
      <div className="mb-3 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="rounded-md text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-foreground">{study.title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {study.client} · {study.industry}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{study.description}</p>

      {/* Structure highlight */}
      <div className="mt-4 flex items-center gap-2 text-xs text-primary">
        <div className="h-1 w-1 rounded-full bg-primary" />
        {study.structureHighlight}
      </div>

      {/* Metrics */}
      <div className="mt-6 flex gap-4 border-t border-border pt-4">
        {study.metrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex items-center gap-1 text-lg font-bold text-primary">
              {metric.value.includes("+") && <TrendingUp className="h-3 w-3" />}
              {metric.value}
            </div>
            <div className="text-xs text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </article>
  )
}
