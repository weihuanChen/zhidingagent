import { ArrowDown } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative border-b border-border px-6 py-28">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--border) 1px, transparent 1px),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <a href="/" className="transition-colors hover:text-foreground">
            首页
          </a>
          <span>/</span>
          <span className="text-foreground">服务方案</span>
        </nav>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          SEO 是一个系统，
          <br />
          <span className="text-primary">不是一次性任务</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-loose text-muted-foreground md:text-xl">
          从结构搭建到稳定获客，SEO 需要 6-12 个月的持续投入。
          <br className="hidden md:block" />
          我们提供与您增长阶段匹配的服务模式，帮助您建立长期的自然流量系统。
        </p>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span>了解 SEO 增长的完整周期</span>
        </div>
      </div>
    </section>
  )
}
