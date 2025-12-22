import { TrendingDown, TrendingUp, DollarSign, Clock, Users, Shield } from "lucide-react"

export function WhySeoSection() {
  return (
    <section id="why-seo" className="relative border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">为什么选择SEO</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            流量越来越贵，
            <br className="hidden md:block" />
            你需要一个可持续的获客系统
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            在抖音、小红书、百度竞价的流量成本连年攀升的今天，越来越多制造业企业开始意识到：
            <span className="text-foreground">花钱买流量是租房，建立自然搜索排名才是买房。</span>
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          {/* Paid Traffic */}
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                <TrendingDown className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">付费流量</h3>
                <span className="text-xs text-muted-foreground">SEM / 信息流 / 平台广告</span>
              </div>
            </div>

            <div className="space-y-5">
              <ComparisonItem
                icon={DollarSign}
                label="成本趋势"
                value="逐年上涨"
                description="竞争加剧，单次点击成本持续攀升"
                negative
              />
              <ComparisonItem
                icon={Clock}
                label="效果持续性"
                value="停投即停"
                description="预算一停，流量归零，没有资产积累"
                negative
              />
              <ComparisonItem
                icon={Users}
                label="流量质量"
                value="依赖算法"
                description="平台掌控分发规则，精准度波动大"
                negative
              />
              <ComparisonItem
                icon={Shield}
                label="资产归属"
                value="平台所有"
                description="流量、数据、用户关系都在平台手中"
                negative
              />
            </div>

            {/* Cost Timeline */}
            <div className="mt-8 border-t border-border pt-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">3年投入趋势</div>
              <div className="flex items-end gap-2">
                <CostBar year="Y1" height={40} cost="30万" />
                <CostBar year="Y2" height={60} cost="45万" />
                <CostBar year="Y3" height={85} cost="68万" rising />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                总投入：<span className="font-semibold text-destructive">143万+</span>，效果递减
              </div>
            </div>
          </div>

          {/* Organic SEO */}
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">自然搜索 SEO</h3>
                <span className="text-xs text-muted-foreground">长期资产 / 复利增长</span>
              </div>
            </div>

            <div className="space-y-5">
              <ComparisonItem
                icon={DollarSign}
                label="成本趋势"
                value="边际递减"
                description="前期投入，后期维护成本极低"
              />
              <ComparisonItem
                icon={Clock}
                label="效果持续性"
                value="长期复利"
                description="排名稳定后，24小时持续带来流量"
              />
              <ComparisonItem
                icon={Users}
                label="流量质量"
                value="意图明确"
                description="用户主动搜索，转化率高于推送流量"
              />
              <ComparisonItem
                icon={Shield}
                label="资产归属"
                value="企业自有"
                description="网站、内容、排名都是企业数字资产"
              />
            </div>

            {/* Value Timeline */}
            <div className="mt-8 border-t border-primary/20 pt-6">
              <div className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">3年价值积累</div>
              <div className="flex items-end gap-2">
                <ValueBar year="Y1" height={30} label="基建期" />
                <ValueBar year="Y2" height={55} label="增长期" />
                <ValueBar year="Y3" height={90} label="收获期" growing />
              </div>
              <div className="mt-3 text-sm text-muted-foreground">
                一次投入：<span className="font-semibold text-primary">15-25万</span>，持续产出
              </div>
            </div>
          </div>
        </div>

        {/* ROI Insight */}
        <div className="rounded-xl border border-border bg-secondary/30 p-8 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-semibold text-foreground">长期来看，SEO的获客成本可以接近于零</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                当你的网站在核心关键词上建立稳定排名，每一个访客都是"免费"的。
                而付费广告的每一次点击，都在消耗预算。这就是为什么深耕行业的制造企业， 最终都会把SEO作为核心获客渠道。
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="rounded-lg border border-border bg-card px-6 py-5 text-center">
                <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  SEO流量的长期边际成本
                </div>
                <div className="mt-2 text-4xl font-bold text-primary">→ 0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ComparisonItem({
  icon: Icon,
  label,
  value,
  description,
  negative,
}: {
  icon: typeof DollarSign
  label: string
  value: string
  description: string
  negative?: boolean
}) {
  return (
    <div className="flex gap-4">
      <div
        className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md ${
          negative ? "bg-secondary" : "bg-primary/10"
        }`}
      >
        <Icon className={`h-4 w-4 ${negative ? "text-muted-foreground" : "text-primary"}`} />
      </div>
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className={`text-sm font-semibold ${negative ? "text-destructive" : "text-primary"}`}>{value}</span>
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function CostBar({ year, height, cost, rising }: { year: string; height: number; cost: string; rising?: boolean }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div className="text-xs font-medium text-destructive">{cost}</div>
      <div
        className={`w-full rounded-t-md ${rising ? "bg-destructive" : "bg-destructive/60"}`}
        style={{ height: `${height}px` }}
      />
      <div className="text-xs text-muted-foreground">{year}</div>
    </div>
  )
}

function ValueBar({
  year,
  height,
  label,
  growing,
}: { year: string; height: number; label: string; growing?: boolean }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div className="text-xs font-medium text-primary">{label}</div>
      <div
        className={`w-full rounded-t-md ${growing ? "bg-primary" : "bg-primary/60"}`}
        style={{ height: `${height}px` }}
      />
      <div className="text-xs text-muted-foreground">{year}</div>
    </div>
  )
}
