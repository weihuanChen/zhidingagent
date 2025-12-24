import { ArrowDown } from "lucide-react"

export function ToolsHero() {
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
          <span className="text-foreground">SEO检测工具</span>
        </nav>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
          SEO 检测工具
          <br />
          <span className="text-primary">专业工具导航站</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-loose text-muted-foreground md:text-xl">
          精选全球领先的 SEO 分析工具，帮助您全面了解网站结构、技术问题和流量表现。
          <br className="hidden md:block" />
          从网站爬虫到流量分析，一站式工具集合。
        </p>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span>探索专业工具</span>
        </div>
      </div>
    </section>
  )
}

