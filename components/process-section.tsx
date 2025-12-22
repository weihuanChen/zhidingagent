import { FileSearch, LayoutGrid, Code2, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "需求调研 & 关键词分析",
    description: "深入了解行业特点，挖掘高价值搜索关键词，制定内容策略基础。",
  },
  {
    icon: LayoutGrid,
    number: "02",
    title: "SEO信息架构设计",
    description: "基于关键词群构建网站结构，确保每个页面都有明确的搜索目标。",
  },
  {
    icon: Code2,
    number: "03",
    title: "高性能开发",
    description: "使用Next.js技术栈，确保极速加载、移动端适配和搜索引擎可访问性。",
  },
  {
    icon: Rocket,
    number: "04",
    title: "上线 & 技术SEO",
    description: "完善元数据、结构化数据、站点地图，确保搜索引擎正确索引。",
  },
  {
    icon: LineChart,
    number: "05",
    title: "持续优化",
    description: "基于数据分析持续迭代，提升排名和转化率。",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="border-t border-border bg-secondary/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-wider text-primary">服务流程</span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            SEO优先的信息架构方法论
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            从策略到执行，每一步都围绕搜索引擎可见性和用户体验优化。
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <ProcessStep key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const isEven = index % 2 === 0

  return (
    <div className={`relative flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <div
          className={`rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md ${
            isEven ? "md:ml-auto" : ""
          } max-w-md`}
        >
          <div className={`mb-4 flex items-center gap-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <step.icon className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">{step.number}</span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
        </div>
      </div>

      {/* Center Dot */}
      <div className="absolute left-6 top-6 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:block md:-translate-x-1.5" />

      {/* Spacer for alternating layout */}
      <div className="hidden flex-1 md:block" />
    </div>
  )
}
