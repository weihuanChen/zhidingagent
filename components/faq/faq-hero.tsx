import Link from "next/link"

export function FaqHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">常见问题</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">FAQ</span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          常见问题
        </h1>

        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            SEO和长期网站增长需要清晰的角色定义和预期对齐。这个页面不是为了销售，而是为了确保我们在开始合作之前，对工作方式、责任边界和长期目标有共同的理解。
          </p>
          <p>
            以下问题涵盖了方法论、服务范围、工具使用、时间预期和协作方式。每个回答都反映了我对SEO的系统性思考，而非简单的服务清单。
          </p>
        </div>
      </div>
    </section>
  )
}

