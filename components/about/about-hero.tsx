import Link from "next/link"

export function AboutHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">关于</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Main positioning */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">ABOUT</span>
            </div>

            <h1 className="mb-8 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              我帮企业建立
              <br />
              <span className="text-primary">能被找到的网站</span>
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-loose text-muted-foreground">
              不是设计师，不是程序员，而是一个专注于搜索架构的系统思考者。
              我的工作是确保你的网站从第一天起就具备被搜索引擎理解、被目标客户发现的结构基础。
            </p>

            <p className="max-w-xl leading-relaxed text-muted-foreground">
              过去几年，我为制造业和品牌客户构建了数十个以SEO为核心的网站。
              这些经验让我形成了一套清晰的方法论：网站不是一次性项目，而是需要持续积累的数字资产。
            </p>
          </div>

          {/* Right: Key beliefs */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">核心信念</h2>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-foreground">结构优于内容</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    再好的内容，如果架构不对，搜索引擎也难以理解
                  </p>
                </div>

                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">长期优于短期</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    SEO是复利游戏，三个月见效的承诺通常意味着风险
                  </p>
                </div>

                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">系统优于技巧</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    可复用的方法比一次性的优化更有价值
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
