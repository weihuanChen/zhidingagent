import { ArrowRight, Building, Compass, Crown } from "lucide-react"

const decisionPaths = [
  {
    intent: "我需要一个结构正确的起点",
    description:
      "您的团队有 SEO 执行能力，或您计划与其他服务商合作后续运营。您需要的是一个技术基础扎实、信息架构合理的网站。",
    recommendation: "网站建设",
    icon: Building,
    fit: ["有内部 SEO 团队", "已有合作的内容团队", "预算有限，先解决基础问题"],
  },
  {
    intent: "我想要方向，但保留执行权",
    description:
      "您有执行资源（内部团队或外部供应商），但缺少 SEO 策略能力。您需要有人告诉您「做什么」和「怎么做对」，然后自己执行。",
    recommendation: "建站 + SEO 顾问",
    icon: Compass,
    fit: ["有内容创作资源", "想要控制执行节奏", "希望培养内部能力"],
  },
  {
    intent: "我想要结果，不想操心过程",
    description:
      "您没有内部 SEO 团队，也不想管理多个供应商。您希望有人对「持续的自然流量」这个结果负责，而不只是交付网站或文档。",
    recommendation: "年度运营",
    icon: Crown,
    fit: ["没有 SEO 执行资源", "追求长期稳定增长", "愿意做年度投入"],
  },
]

export function DecisionGuide() {
  return (
    <section id="guide" className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="mb-3 inline-block rounded-md bg-muted px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Decision Guide
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            根据需求选择，而非价格
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            每种服务模式都有其适用场景。关键问题是：您愿意投入多少执行资源，以及您追求的是什么结果？
          </p>
        </div>

        {/* Decision paths */}
        <div className="space-y-6">
          {decisionPaths.map((path, index) => (
            <div
              key={path.intent}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
                {/* Icon and intent */}
                <div className="flex items-start gap-4 lg:w-1/3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <path.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="mb-1 block font-mono text-xs text-muted-foreground">场景 {index + 1}</span>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">"{path.intent}"</h3>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:w-1/3">
                  <p className="text-base leading-relaxed text-muted-foreground">{path.description}</p>
                </div>

                {/* Recommendation and fit */}
                <div className="lg:w-1/3">
                  <div className="mb-4 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">{path.recommendation}</span>
                  </div>
                  <div className="space-y-2">
                    {path.fit.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1 w-1 rounded-full bg-muted-foreground" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 rounded-xl bg-secondary/50 p-8 text-center">
          <p className="text-base leading-relaxed text-muted-foreground">
            不确定哪个方案适合您？<span className="text-foreground">没关系</span>。
            <br className="hidden md:block" />
            我们可以先聊聊您的业务情况和增长目标，再给出具体建议。
          </p>
        </div>
      </div>
    </section>
  )
}
