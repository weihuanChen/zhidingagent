import Link from "next/link"

export function CaseHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">案例</span>
        </nav>

        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">CASE STUDIES</span>
          </div>

          <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            实践案例与实验
          </h1>

          <p className="mb-4 text-lg leading-loose text-muted-foreground">
            这不是客户作品集，而是一系列实践案例和实验的集合。
            我关注的是思考过程、结构设计和系统架构，而非虚荣指标或品牌标识。
          </p>

          <p className="leading-relaxed text-muted-foreground">
            部分案例来自个人实践项目，部分来自匿名化的客户工作。
            所有案例都聚焦于可重复的思考模式，而非一次性的成功故事。
          </p>
        </div>
      </div>
    </section>
  )
}

