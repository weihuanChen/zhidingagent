import { Search, TrendingUp, Target, CheckCircle2 } from "lucide-react"

const stages = [
  {
    id: 1,
    phase: "基础期",
    duration: "0-3 个月",
    title: "搭建正确的结构",
    description: "这个阶段的重点不是流量，而是为长期增长奠定正确的基础。大多数「SEO没效果」的项目，问题都出在这一步。",
    tasks: [
      { label: "关键词策略", detail: "基于搜索意图的词库规划" },
      { label: "信息架构", detail: "SEO友好的站点结构设计" },
      { label: "网站开发", detail: "技术SEO最佳实践" },
      { label: "搜索引擎收录", detail: "确保页面被正确索引" },
    ],
    outcome: "一个结构正确、可被搜索引擎理解的网站",
    icon: Search,
  },
  {
    id: 2,
    phase: "成长期",
    duration: "3-6 个月",
    title: "积累内容资产",
    description: "结构就位后，开始系统性地扩展内容。这是从「被收录」到「有排名」的关键阶段。",
    tasks: [
      { label: "内容扩展", detail: "围绕核心词群持续产出" },
      { label: "内链优化", detail: "建立页面间的语义关联" },
      { label: "长尾词覆盖", detail: "捕获细分搜索需求" },
      { label: "数据监测", detail: "基于排名变化调整策略" },
    ],
    outcome: "长尾词开始带来自然流量，首批询盘出现",
    icon: TrendingUp,
  },
  {
    id: 3,
    phase: "收获期",
    duration: "6-12 个月",
    title: "稳定的自然获客",
    description: "当内容资产积累到一定规模，SEO 开始展现复利效应。获客成本持续下降，询盘质量持续提升。",
    tasks: [
      { label: "核心词排名稳定", detail: "首页位置的持续维护" },
      { label: "持续的自然询盘", detail: "无需付费的潜在客户" },
      { label: "获客成本下降", detail: "边际成本趋近于零" },
      { label: "品牌搜索增长", detail: "从流量到品牌认知" },
    ],
    outcome: "可预测的、持续的、低成本的自然流量系统",
    icon: Target,
  },
]

export function GrowthTimeline() {
  return (
    <section id="timeline" className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block rounded-md bg-muted px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Growth Timeline
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            SEO 增长的三个阶段
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            理解这个周期，是选择正确服务模式的前提。每个阶段有不同的工作重点和产出预期。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-0">
            {stages.map((stage, index) => (
              <div key={stage.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                {/* Timeline dot */}
                <div className="absolute left-8 top-0 z-10 hidden h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary md:left-1/2 md:flex">
                  <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                </div>

                {/* Content - alternates sides on desktop */}
                <div
                  className={`rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
                    index % 2 === 0 ? "md:col-start-1 md:text-right" : "md:col-start-2"
                  }`}
                >
                  {/* Phase indicator */}
                  <div
                    className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <stage.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-sm text-primary">{stage.phase}</span>
                      <span className="mx-2 text-muted-foreground">·</span>
                      <span className="font-mono text-sm text-muted-foreground">{stage.duration}</span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">{stage.title}</h3>
                  <p className="mb-6 text-base leading-relaxed text-muted-foreground">{stage.description}</p>

                  {/* Tasks */}
                  <div className={`mb-6 space-y-3 ${index % 2 === 0 ? "md:text-left" : ""}`}>
                    {stage.tasks.map((task) => (
                      <div key={task.label} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <span className="font-medium text-foreground">{task.label}</span>
                          <span className="text-muted-foreground"> — {task.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div
                    className={`rounded-lg border border-primary/20 bg-primary/5 p-4 ${index % 2 === 0 ? "md:text-left" : ""}`}
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">阶段产出</span>
                    <p className="mt-1 text-sm font-medium text-foreground">{stage.outcome}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
                {index % 2 !== 0 && <div className="order-first hidden md:block" />}

                {/* Mobile connector */}
                {index < stages.length - 1 && (
                  <div className="my-4 flex justify-center md:hidden">
                    <div className="h-8 w-px bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Expectation callout */}
        <div className="mt-16 rounded-xl border border-border bg-secondary/50 p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
              <span className="text-lg font-bold text-muted-foreground">!</span>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">关于预期管理</h4>
              <p className="text-base leading-relaxed text-muted-foreground">
                SEO 的前 3 个月通常看不到流量增长，这是正常的。这个阶段的工作是结构性的，为后续增长创造条件。
                如果有人承诺「一个月见效」，请保持警惕——要么是黑帽手段，要么是虚假承诺。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
