import Link from "next/link"

export function InsightsHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">知识库</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left: Main introduction */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="font-mono text-xs tracking-wider text-muted-foreground">KNOWLEDGE BASE</span>
            </div>

            <h1 className="mb-8 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
              知识库
            </h1>

            <p className="mb-6 max-w-xl text-lg leading-loose text-muted-foreground">
              这里不是 SEO 技巧的集合，而是一个专注于决策思考、系统架构和长期增长的知识体系。
              内容围绕 SEO 基础、网站架构、制造业与品牌 SEO，以及 AI 就绪搜索展开。
            </p>

            <div className="space-y-4 max-w-xl">
              <p className="leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">目标读者：</span>
                企业主、营销负责人、品牌团队。如果你正在规划网站、评估 SEO 投入，或思考如何让业务在搜索中持续获得曝光，这里的内容会帮助你建立清晰的认知框架。
              </p>

              <p className="leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">内容定位：</span>
                我们关注长期视角而非短期技巧，关注系统思考而非孤立优化。每一篇文章都旨在帮助你做出更好的决策，建立可持续的搜索资产。
              </p>
            </div>
          </div>

          {/* Right: Key principles */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">内容原则</h2>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <p className="font-medium text-foreground">决策导向</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    帮助你在关键节点做出正确选择，而非提供通用建议
                  </p>
                </div>

                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">系统思维</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    理解 SEO 如何与网站架构、内容策略协同工作
                  </p>
                </div>

                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">长期视角</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    关注可持续增长，而非短期排名波动
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

