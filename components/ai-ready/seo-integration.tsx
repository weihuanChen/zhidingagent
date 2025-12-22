export function SeoIntegration() {
  return (
    <section className="border-b border-border bg-secondary/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">架构整合</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            如何与SEO优先架构集成
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            AI就绪思维建立在SEO优先架构的基础之上。它不是对现有方法的颠覆，而是对现有系统的增强。
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <IntegrationCard
            title="SEO优先信息架构"
            description="清晰的URL结构、逻辑的页面层级、明确的导航关系。这是所有优化的基础。"
            foundation={true}
          />
          <IntegrationCard
            title="长期内容系统"
            description="持续的内容积累、稳定的更新节奏、可扩展的内容框架。这是可见性的复利引擎。"
            foundation={true}
          />
          <IntegrationCard
            title="可持续的有机获取"
            description="不依赖短期技巧，而是建立长期资产。这是所有优化的目标。"
            foundation={true}
          />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">连续性，而非颠覆</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              AI就绪优化不是要你推倒重来，而是在现有SEO架构基础上增加语义层和结构化标记。如果你的网站已经有清晰的SEO结构，那么AI就绪优化就是在这个结构上增加机器可读性和语义一致性。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">保持现有的URL结构和导航</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">增强内容的语义标记</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">建立实体关系网络</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">增强，而非替代</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              AI就绪优化增强了你的SEO架构，使其不仅对搜索引擎友好，也对AI系统友好。这意味着你的内容在传统搜索结果和AI生成答案中都能保持可见性。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">搜索引擎继续发现和索引你的内容</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">AI系统能够理解和引用你的内容</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">两种渠道共同提升可见性</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationCard({
  title,
  description,
  foundation,
}: {
  title: string
  description: string
  foundation?: boolean
}) {
  return (
    <div className={`rounded-xl border ${foundation ? "border-primary/30 bg-primary/5" : "border-border bg-card"} p-6`}>
      {foundation && (
        <div className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">基础</div>
      )}
      <h3 className="mb-3 font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}

