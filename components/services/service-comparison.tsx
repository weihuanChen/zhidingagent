import { Check, Minus } from "lucide-react"

const comparisonData = {
  stages: ["基础期 (0-3月)", "成长期 (3-6月)", "收获期 (6-12月)"],
  models: [
    {
      name: "网站建设",
      coverage: [true, false, false],
      ownership: "网站资产",
      riskLevel: "高",
      riskNote: "后续执行风险自担",
    },
    {
      name: "建站 + 顾问",
      coverage: [true, true, false],
      ownership: "网站 + 策略",
      riskLevel: "中",
      riskNote: "执行质量影响效果",
    },
    {
      name: "年度运营",
      coverage: [true, true, true],
      ownership: "完整系统",
      riskLevel: "低",
      riskNote: "结果由我们负责",
    },
  ],
}

export function ServiceComparison() {
  return (
    <section id="comparison" className="border-b border-border px-6 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block rounded-md bg-muted px-3 py-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Comparison
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">服务覆盖对比</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            不同服务模式覆盖 SEO 增长周期的不同阶段，选择取决于您愿意承担多少执行工作。
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-hidden rounded-xl border border-border bg-card">
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-border bg-secondary/30">
            <div className="p-4">
              <span className="text-sm font-semibold text-foreground">服务模式</span>
            </div>
            {comparisonData.stages.map((stage) => (
              <div key={stage} className="p-4 text-center">
                <span className="text-sm font-semibold text-foreground">{stage}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {comparisonData.models.map((model, index) => (
            <div
              key={model.name}
              className={`grid grid-cols-4 ${index !== comparisonData.models.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-center p-4">
                <span className="font-medium text-foreground">{model.name}</span>
              </div>
              {model.coverage.map((covered, i) => (
                <div key={i} className="flex items-center justify-center p-4">
                  {covered ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                      <Minus className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Additional comparison */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {comparisonData.models.map((model) => (
            <div key={model.name} className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 font-semibold text-foreground">{model.name}</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">资产所有权</span>
                  <span className="font-medium text-foreground">{model.ownership}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">风险等级</span>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                      model.riskLevel === "低"
                        ? "bg-primary/10 text-primary"
                        : model.riskLevel === "中"
                          ? "bg-yellow-500/10 text-yellow-600"
                          : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {model.riskLevel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">{model.riskNote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
