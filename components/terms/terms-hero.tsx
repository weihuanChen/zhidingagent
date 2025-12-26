import Link from "next/link"

export function TermsHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">服务条款</span>
        </nav>

        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">TERMS</span>
        </div>

        <h1 className="mb-6 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
          服务条款
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground">
          在使用本站或与我进行合作沟通前，请你了解以下内容。
        </p>
      </div>
    </section>
  )
}

