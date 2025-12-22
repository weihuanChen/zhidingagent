import { Building2, Users, Rocket, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceModels = [
  {
    id: "build",
    name: "网站建设",
    subtitle: "一次性交付",
    coverage: ["基础期"],
    description: "如果您的团队有 SEO 执行能力，或计划与其他服务商合作后续运营，这个选项提供正确的起点。",
    price: "¥50,000 起",
    priceNote: "根据站点规模",
    deliverables: ["关键词策略文档", "信息架构设计", "SEO 友好网站", "技术 SEO 配置", "搜索引擎提交"],
    limitations: ["仅覆盖基础期", "不包含内容运营", "不包含排名维护", "需自行执行后续策略"],
    icon: Building2,
    recommended: false,
  },
  {
    id: "consult",
    name: "建站 + SEO 顾问",
    subtitle: "策略指导",
    coverage: ["基础期", "成长期"],
    description: "完整的网站建设，加上 6 个月的 SEO 顾问服务。我们提供策略、方向和审核，您的团队或外部资源负责执行。",
    price: "¥80,000 起",
    priceNote: "含 6 个月顾问",
    deliverables: [
      "网站建设全部内容",
      "月度 SEO 策略",
      "内容选题规划",
      "执行审核与反馈",
      "数据分析报告",
      "策略调整建议",
    ],
    limitations: ["内容由您方执行", "需要一定的执行资源"],
    icon: Users,
    recommended: true,
  },
  {
    id: "retainer",
    name: "年度运营",
    subtitle: "全托管服务",
    coverage: ["基础期", "成长期", "收获期"],
    description:
      "从建站到长期运营的完整托管。我们作为您的外部 SEO 负责人，对流量增长结果负责。适合没有内部 SEO 团队的企业。",
    price: "¥150,000 起",
    priceNote: "年度合约",
    deliverables: [
      "建站 + 顾问全部内容",
      "内容创作与发布",
      "持续的技术优化",
      "外链建设",
      "竞争对手监测",
      "月度业务汇报",
      "年度策略复盘",
    ],
    limitations: [],
    icon: Rocket,
    recommended: false,
    highlight: true,
  },
]

export function ServiceModels() {
  return (
    <section id="models" className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-3 inline-block rounded-md bg-muted px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Service Models
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            三种服务模式，对应不同需求
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            没有「最好」的方案，只有最适合您当前阶段的方案。选择取决于您的执行能力和增长目标。
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceModels.map((model) => (
            <div
              key={model.id}
              className={`relative flex flex-col rounded-xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
                model.highlight ? "border-primary" : "border-border"
              }`}
            >
              {/* Recommended badge */}
              {model.recommended && (
                <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  推荐
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg ${model.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"}`}
                  >
                    <model.icon className={`h-6 w-6 ${model.highlight ? "" : "text-primary"}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{model.name}</h3>
                    <span className="text-sm text-muted-foreground">{model.subtitle}</span>
                  </div>
                </div>

                {/* Coverage badges */}
                <div className="flex flex-wrap gap-2">
                  {model.coverage.map((phase) => (
                    <span
                      key={phase}
                      className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {phase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="mb-6 text-base leading-relaxed text-muted-foreground">{model.description}</p>

              {/* Price */}
              <div className="mb-6 rounded-lg bg-secondary/50 p-4">
                <div className="text-2xl font-bold text-foreground">{model.price}</div>
                <div className="text-sm text-muted-foreground">{model.priceNote}</div>
              </div>

              {/* Deliverables */}
              <div className="mb-6 flex-1">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">交付内容</h4>
                <ul className="space-y-2">
                  {model.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              {model.limitations.length > 0 && (
                <div className="mb-6 rounded-lg border border-border bg-muted/30 p-4">
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    需要注意
                  </h4>
                  <ul className="space-y-1">
                    {model.limitations.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground">
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <Button
                variant={model.highlight ? "default" : "outline"}
                className="mt-auto w-full justify-between rounded-lg"
              >
                了解详情
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
