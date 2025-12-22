import { Search, LayoutGrid, Code2, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "关键词战略",
    subtitle: "Keyword Strategy",
    description: "深入了解你的行业和客户，找出他们真正在搜索什么。我们不追求虚荣指标，只关注能带来实际询盘的关键词。",
    output: "关键词矩阵文档",
    seoImpact: "明确搜索目标",
  },
  {
    icon: LayoutGrid,
    number: "02",
    title: "信息架构设计",
    subtitle: "Information Architecture",
    description:
      "基于关键词策略规划网站结构，让每个页面都有明确使命。好的架构不只是好看，更要让搜索引擎和用户都能轻松找到想要的内容。",
    output: "网站结构图 + 页面规划",
    seoImpact: "结构化覆盖词群",
  },
  {
    icon: Code2,
    number: "03",
    title: "高性能开发",
    subtitle: "Performance Development",
    description: "采用 Next.js 技术栈，确保网站加载飞快、移动端友好。因为再好的内容，如果加载超过3秒，客户就走了。",
    output: "生产就绪网站",
    seoImpact: "Core Web Vitals 达标",
  },
  {
    icon: Rocket,
    number: "04",
    title: "技术SEO部署",
    subtitle: "Technical SEO",
    description:
      "完善所有搜索引擎需要的技术细节：元数据、结构化数据、站点地图。这些看不见的工作，决定了网站能否被正确收录。",
    output: "SEO配置清单",
    seoImpact: "搜索引擎正确索引",
  },
  {
    icon: LineChart,
    number: "05",
    title: "持续迭代优化",
    subtitle: "Continuous Optimization",
    description: "上线不是终点，而是开始。我们持续追踪数据，分析用户行为，不断优化内容和体验，让排名稳步提升。",
    output: "月度分析报告",
    seoImpact: "排名持续提升",
  },
]

export function MethodologySection() {
  return (
    <section id="methodology" className="relative border-t border-border bg-secondary/30 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 max-w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">我们的方法</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            不是先建站后优化，
            <br className="hidden md:block" />
            而是先规划后建设
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            很多企业花大价钱建了漂亮网站，却发现没人能搜到。问题出在顺序上——
            <span className="text-foreground">SEO不是网站的附加项，而应该是起点。</span>
            我们从第一步就把搜索可见性融入整个建设过程。
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[39px] top-0 hidden h-full w-px bg-gradient-to-b from-primary/50 via-border to-border md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <MethodologyCard key={step.number} step={step} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <div className="text-sm font-medium text-muted-foreground">从启动到上线</div>
              <div className="mt-2 text-3xl font-bold text-foreground">4-8 周</div>
            </div>
            <div className="hidden h-12 w-px bg-border md:block" />
            <div className="text-center md:text-left">
              <div className="text-sm font-medium text-muted-foreground">完整交付文档</div>
              <div className="mt-2 text-3xl font-bold text-foreground">5+ 份</div>
            </div>
            <div className="hidden h-12 w-px bg-border md:block" />
            <div className="text-center md:text-left">
              <div className="text-sm font-medium text-muted-foreground">上线后持续支持</div>
              <div className="mt-2 text-3xl font-bold text-foreground">12 个月</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MethodologyCard({ step, isLast }: { step: (typeof steps)[number]; isLast: boolean }) {
  return (
    <div className="group relative flex gap-6 md:gap-8">
      <div className="relative flex flex-col items-center">
        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-card text-3xl font-bold text-primary shadow-sm transition-shadow group-hover:shadow-md">
          {step.number}
        </div>
        {!isLast && <div className="mt-6 h-px w-8 bg-border md:hidden" />}
      </div>

      <div className="flex-1 rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow group-hover:shadow-md">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <span className="text-xs text-muted-foreground">{step.subtitle}</span>
              </div>
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{step.description}</p>
          </div>

          <div className="flex gap-4 lg:flex-col lg:items-end lg:gap-3">
            <div className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-center lg:text-right">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">交付物</div>
              <div className="text-xs font-medium text-foreground">{step.output}</div>
            </div>
            <div className="rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-center lg:text-right">
              <div className="text-[10px] uppercase tracking-wider text-primary/70">SEO影响</div>
              <div className="text-xs font-medium text-primary">{step.seoImpact}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
