import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <div className="animate-fade-in">
              <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span className="h-px w-8 bg-primary" />
                服务制造业与品牌企业
              </span>
            </div>

            <h1 className="animate-fade-in-delay-1 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-[56px]">
              让客户主动找到你，
              <br />
              <span className="text-primary">而不是你找客户</span>
            </h1>

            <p className="animate-fade-in-delay-2 mt-8 max-w-lg text-pretty text-lg leading-loose text-muted-foreground">
              我们帮助制造业和品牌企业构建<span className="font-medium text-foreground">真正有效的企业网站</span>——
              不是花瓶式的展示页面，而是能持续带来精准客户的流量系统。从信息架构到技术实现，每一步都为搜索可见性服务。
            </p>

            <div className="animate-fade-in-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group rounded-lg">
                获取免费网站诊断
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-lg bg-transparent">
                看看我们怎么做到的
              </Button>
            </div>

            <div className="mt-14 flex items-center gap-10 border-t border-border pt-8">
              <StatItem value="150+" label="家企业信任我们" />
              <div className="h-8 w-px bg-border" />
              <StatItem value="3倍" label="平均流量提升" />
              <div className="h-8 w-px bg-border" />
              <StatItem value="<1秒" label="极速加载体验" />
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Information Architecture Diagram */}
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    SEO-first 信息架构
                  </span>
                </div>

                {/* Sitemap Tree Structure */}
                <div className="space-y-3">
                  {/* Root */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-full items-center rounded-lg border border-primary bg-primary/5 px-4">
                      <span className="text-sm font-medium text-foreground">首页 · H1 核心关键词</span>
                    </div>
                  </div>

                  {/* Level 1 */}
                  <div className="ml-4 space-y-2 border-l border-border pl-4">
                    <SitemapNode label="产品中心" tag="产品词群" active />
                    <SitemapNode label="解决方案" tag="场景词群" />
                    <SitemapNode label="案例中心" tag="品牌词+长尾" />
                    <SitemapNode label="知识库" tag="信息词群" />
                  </div>

                  {/* Level 2 Example */}
                  <div className="ml-12 space-y-2 border-l border-dashed border-border pl-4">
                    <SitemapNode label="产品详情页" tag="长尾关键词" small />
                    <SitemapNode label="技术参数" tag="规格型号" small />
                  </div>
                </div>

                {/* Data Cards */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <DataCard value="98" label="页面SEO评分" suffix="/100" />
                  <DataCard value="2.1" label="页面加载" suffix="s" />
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-3 -top-3 h-2 w-2 rounded-full bg-primary/30" />
              <div className="absolute -bottom-3 -left-3 h-2 w-2 rounded-full bg-primary/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

function SitemapNode({
  label,
  tag,
  active,
  small,
}: {
  label: string
  tag: string
  active?: boolean
  small?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-1.5 rounded-full bg-border" />
      <div
        className={`flex flex-1 items-center justify-between rounded-md border px-3 ${
          small ? "py-1.5" : "py-2"
        } ${active ? "border-primary/30 bg-primary/5" : "border-border bg-background"}`}
      >
        <span className={`font-medium text-foreground ${small ? "text-xs" : "text-sm"}`}>{label}</span>
        <span className={`text-muted-foreground ${small ? "text-[10px]" : "text-xs"}`}>{tag}</span>
      </div>
    </div>
  )
}

function DataCard({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-3">
      <div className="text-xl font-bold text-primary">
        {value}
        <span className="text-sm font-normal text-muted-foreground">{suffix}</span>
      </div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  )
}
