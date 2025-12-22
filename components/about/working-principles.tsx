import { Check, X } from "lucide-react"

const goodFit = [
  "愿意投入6-12个月看长期效果",
  "有清晰的产品/服务定位",
  "重视结构化思维和系统方法",
  "希望建立可积累的数字资产",
  "理解SEO是投资而非成本",
]

const notGoodFit = [
  "期望3个月内看到显著排名提升",
  "预算有限，希望用最少成本获得最大效果",
  "需要大量创意设计和视觉冲击",
  "希望快速复制竞争对手的做法",
  "只关注某几个关键词的排名",
]

export function WorkingPrinciples() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">合作原则</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            我希望每个合作都能产生真正的价值。
            这意味着我们需要在开始前就对期望达成共识。以下是我的工作方式和适合的合作类型。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Good fit */}
          <div className="rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">适合合作</h3>
            </div>

            <ul className="space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not good fit */}
          <div className="rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <X className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">可能不适合</h3>
            </div>

            <ul className="space-y-4">
              {notGoodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                  <span className="leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-md border border-border bg-card p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">说明：</span>
                以上不是否定这些需求，而是说明我的方法可能不是最适合的解决方案。
                如果你不确定，我们可以先聊聊，我会诚实地告诉你我的判断。
              </p>
            </div>
          </div>
        </div>

        {/* Working style */}
        <div className="mt-12 rounded-lg border border-border bg-card p-6 md:p-8">
          <h3 className="mb-6 text-lg font-semibold text-foreground">我的工作方式</h3>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-sm text-primary">01</p>
              <p className="font-medium text-foreground">文档先行</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                每个项目都会产出详细的策略文档和架构规划，这些是你的资产，不是我的黑盒。
              </p>
            </div>

            <div>
              <p className="mb-2 font-mono text-sm text-primary">02</p>
              <p className="font-medium text-foreground">异步沟通</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                我更倾向于书面沟通和定期同步，而非频繁的会议。这样双方都能保持专注。
              </p>
            </div>

            <div>
              <p className="mb-2 font-mono text-sm text-primary">03</p>
              <p className="font-medium text-foreground">直接坦诚</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                如果我认为某个方向不可行，会直接说明原因和替代方案。不会为了迎合而同意。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
