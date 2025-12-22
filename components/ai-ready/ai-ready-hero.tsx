import Link from "next/link"

export function AiReadyHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">AI就绪</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Main positioning */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">AI-READY</span>
            </div>

            <h1 className="mb-8 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              搜索正在改变
            </h1>

            <div className="space-y-6">
              <p className="max-w-xl text-lg leading-loose text-muted-foreground">
                搜索环境正在经历根本性的转变。从关键词匹配到语义理解，再到AI辅助和生成式搜索体验。
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">关键词匹配时代</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      用户输入精确的关键词，搜索引擎返回匹配的页面列表
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">语义理解时代</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      搜索引擎理解查询意图，返回相关但可能不包含精确关键词的内容
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">AI辅助与生成式搜索</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      AI助手和搜索引擎正在成为决策层，而不仅仅是索引。它们理解、总结、引用，然后生成答案
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <p className="leading-relaxed text-foreground">
                  <span className="font-semibold">关键洞察：</span>
                  AI助手和搜索引擎正在成为决策层，而不仅仅是索引。这意味着你的网站需要被理解、被引用、被总结，而不仅仅是被发现。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Visual representation */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">搜索演进</h2>

              <div className="space-y-6">
                {/* Evolution timeline */}
                <div className="relative">
                  <div className="absolute left-3 top-0 h-full w-0.5 bg-border" />
                  
                  <div className="relative flex items-start gap-4 pb-6">
                    <div className="relative z-10 h-6 w-6 rounded-full border-2 border-primary bg-background" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">关键词匹配</p>
                      <p className="mt-1 text-xs text-muted-foreground">精确匹配，列表结果</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4 pb-6">
                    <div className="relative z-10 h-6 w-6 rounded-full border-2 border-primary bg-background" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">语义理解</p>
                      <p className="mt-1 text-xs text-muted-foreground">意图识别，相关内容</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="relative z-10 h-6 w-6 rounded-full border-2 border-primary bg-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">AI生成式搜索</p>
                      <p className="mt-1 text-xs text-muted-foreground">理解、引用、生成答案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

