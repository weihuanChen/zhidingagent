export function WhyTraditionalSeoFails() {
  return (
    <section className="border-b border-border bg-secondary/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">传统局限</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            为什么传统SEO不再足够
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            在AI驱动的搜索环境中，许多传统的SEO方法遇到了根本性的限制。这些限制不仅影响搜索引擎的可见性，更影响AI系统对你的内容的理解和引用。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <LimitationCard
            title="仅为关键词而写的内容"
            description="内容完全围绕关键词密度优化，缺乏语义深度和上下文关系。AI系统难以理解这些内容在更大的知识图谱中的位置。"
            impact="在AI生成的答案中，你的内容可能被忽略或误解"
          />
          <LimitationCard
            title="碎片化的网站结构"
            description="页面之间缺乏清晰的逻辑关系，信息孤岛化。产品、服务、案例、知识库之间没有形成可理解的实体网络。"
            impact="AI无法建立完整的业务画像，引用时容易断章取义"
          />
          <LimitationCard
            title="人类可读但机器不清"
            description="内容对读者友好，但缺乏结构化标记和语义元数据。机器难以准确理解内容的主题、实体关系和重要性层级。"
            impact="搜索引擎和AI模型无法高效地提取、总结和引用你的信息"
          />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">核心问题</h3>
          <p className="leading-relaxed text-muted-foreground">
            这些问题的共同点是：它们限制了你在AI驱动搜索结果中的可见性。当用户通过AI助手提问时，如果AI无法清晰理解你的内容结构、实体关系和语义含义，你的网站就不会出现在答案的引用来源中。
          </p>
        </div>
      </div>
    </section>
  )
}

function LimitationCard({
  title,
  description,
  impact,
}: {
  title: string
  description: string
  impact: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-3 font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="border-t border-border pt-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">影响</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{impact}</p>
      </div>
    </div>
  )
}

