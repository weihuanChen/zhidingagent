export function GeoPerspective() {
  return (
    <section className="border-b border-border bg-background px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">GEO视角</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            生成式引擎优化（GEO）视角
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">什么是GEO？</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              GEO（Generative Engine Optimization）是优化内容以被AI系统使用、引用和总结的方法。
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">被AI系统使用</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    你的内容成为AI生成答案时的信息来源
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">被正确引用</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    AI在生成答案时能够准确引用你的网站作为来源
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                <div>
                  <p className="font-medium text-foreground">被准确总结</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    AI能够理解你的核心信息并准确概括
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-secondary/50 p-8">
            <h3 className="mb-4 text-lg font-semibold text-foreground">GEO与SEO的关系</h3>
            <p className="mb-6 leading-relaxed text-muted-foreground">
              GEO不是SEO的替代品，而是SEO的自然演进。
            </p>
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-background p-4">
                <p className="text-sm font-medium text-foreground">SEO基础</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  确保搜索引擎能够发现、抓取和理解你的内容
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-px w-12 bg-primary" />
                <div className="mx-2 text-xs text-muted-foreground">演进</div>
                <div className="h-px w-12 bg-primary" />
              </div>
              <div className="rounded-lg border border-primary bg-primary/5 p-4">
                <p className="text-sm font-medium text-foreground">GEO扩展</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  确保AI系统能够理解、引用和总结你的内容
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-xl border-l-4 border-primary bg-primary/5 p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">GEO作为自然演进</h3>
          <p className="leading-relaxed text-muted-foreground">
            GEO不是对SEO的颠覆，而是对SEO优先架构的自然扩展。如果你已经建立了清晰的SEO信息架构和长期内容系统，那么GEO优化就是在现有基础上的增强。它让你的内容不仅被搜索引擎理解，也被AI系统理解；不仅出现在搜索结果中，也出现在AI生成的答案中。
          </p>
        </div>
      </div>
    </section>
  )
}

