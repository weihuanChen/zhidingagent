export function WhoThisIsFor() {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">适用对象</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            这适合谁？
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            AI就绪架构不是所有企业的优先事项，但对于某些类型的业务，它是长期可见性的关键投资。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AudienceCard
            title="投资长期可见性的企业"
            description="那些将网站视为长期数字资产，而非一次性项目的企业。他们理解SEO是复利游戏，愿意为未来的可见性投资。"
            characteristics={[
              "有长期业务规划",
              "重视有机流量获取",
              "理解内容积累的价值",
            ]}
          />
          <AudienceCard
            title="计划网站重建或结构升级的团队"
            description="正在考虑网站改版、重建或重大结构优化的团队。这是建立AI就绪架构的最佳时机。"
            characteristics={[
              "有明确的改版计划",
              "愿意投资结构优化",
              "理解架构的重要性",
            ]}
          />
          <AudienceCard
            title="关注未来可发现性的品牌"
            description="那些意识到搜索环境正在改变，希望提前准备而非被动应对的品牌。"
            characteristics={[
              "关注行业趋势",
              "重视品牌可见性",
              "愿意提前布局",
            ]}
          />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-secondary/50 p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">不适合的情况</h3>
          <p className="mb-6 leading-relaxed text-muted-foreground">
            如果你正在寻找快速见效的技巧、短期的流量提升，或者你的网站只是临时的营销工具，那么AI就绪架构可能不是你的优先事项。AI就绪架构是为那些将网站视为长期资产的企业设计的。
          </p>
        </div>
      </div>
    </section>
  )
}

function AudienceCard({
  title,
  description,
  characteristics,
}: {
  title: string
  description: string
  characteristics: string[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-3 font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="border-t border-border pt-4">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">特征</p>
        <div className="space-y-2">
          {characteristics.map((char, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-sm text-foreground">{char}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

