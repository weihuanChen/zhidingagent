export function WhatAiReadyMeans() {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">核心定义</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            "AI就绪"的实际含义
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">什么是AI就绪网站？</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              AI就绪网站是一个系统，它具备以下特征：
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">结构清晰</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    信息架构逻辑明确，页面职责分明，导航关系可预测
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">语义一致</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    术语使用稳定，实体关系明确，概念定义清晰
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">易于理解</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    搜索引擎和AI模型能够轻松理解、引用和总结你的内容
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-secondary/50 p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">这不是关于什么</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              为了避免误解，需要明确：
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">不是AI工具或自动化</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    我们讨论的是网站结构，不是AI工具的使用
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">不是技术术语堆砌</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    重点在于概念和策略，而非复杂的技术实现
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                <div>
                  <p className="font-medium text-foreground">不是趋势追逐</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    这是关于长期可见性的准备，而非短期热点
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-xl border-l-4 border-primary bg-primary/5 p-8">
          <p className="leading-relaxed text-foreground">
            <span className="font-semibold">简单来说：</span>
            AI就绪网站是一个结构清晰、语义明确、易于被机器理解和引用的内容系统。它让搜索引擎和AI助手能够准确理解你的业务、产品和服务，并在生成答案时正确引用你的内容。
          </p>
        </div>
      </div>
    </section>
  )
}

