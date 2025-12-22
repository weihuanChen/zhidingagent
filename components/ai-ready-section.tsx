import { Brain, Layers, FileText, Network, CheckCircle2 } from "lucide-react"

export function AiReadySection() {
  return (
    <section id="ai-ready" className="relative border-t border-border bg-secondary/30 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">面向未来</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            不只是SEO，
            <br className="hidden md:block" />
            更是AI时代的信息架构
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            搜索正在改变。越来越多的用户通过AI助手、智能问答获取信息。 我们构建的不只是搜索引擎友好的网站，而是
            <span className="text-foreground">能被AI正确理解和引用的结构化内容系统</span>。
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left - Concept Explanation */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="text-lg font-semibold text-foreground">什么是 AI-Ready 架构？</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                当用户问AI"哪家公司做精密铸造比较好"，AI会从哪里获取答案？
                它会抓取、理解、引用那些内容结构清晰、语义明确、实体关系完整的网站。
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                这不是未来，这是正在发生的事。我们帮你提前做好准备。
              </p>

              <div className="mt-8 space-y-4">
                <ReadinessItem title="GEO 生成式引擎优化" description="让你的内容成为AI回答的来源" />
                <ReadinessItem title="实体化内容架构" description="产品、服务、案例形成知识图谱" />
                <ReadinessItem title="结构化数据标记" description="Schema.org 让机器读懂你的内容" />
              </div>
            </div>
          </div>

          {/* Right - Architecture Visualization */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  AI-Ready 信息架构
                </span>
              </div>

              {/* Architecture Diagram */}
              <div className="relative">
                {/* Central Entity */}
                <div className="mb-6 flex justify-center">
                  <div className="rounded-lg border-2 border-primary bg-primary/10 px-6 py-4 text-center">
                    <div className="text-sm font-semibold text-primary">企业实体</div>
                    <div className="mt-1 text-xs text-muted-foreground">Organization Schema</div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="mb-4 flex justify-center">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-16 bg-border" />
                    <div className="h-2 w-2 rounded-full bg-primary/50" />
                    <div className="h-px w-16 bg-border" />
                  </div>
                </div>

                {/* Entity Nodes */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  <EntityNode
                    icon={Layers}
                    title="产品实体"
                    schema="Product"
                    items={["规格参数", "应用场景", "技术文档"]}
                  />
                  <EntityNode
                    icon={FileText}
                    title="内容实体"
                    schema="Article"
                    items={["行业知识", "技术解读", "常见问题"]}
                  />
                  <EntityNode
                    icon={Network}
                    title="案例实体"
                    schema="Case Study"
                    items={["客户背景", "解决方案", "成效数据"]}
                  />
                  <EntityNode
                    icon={Brain}
                    title="服务实体"
                    schema="Service"
                    items={["服务流程", "交付标准", "适用场景"]}
                  />
                </div>

                {/* Bottom Connection */}
                <div className="mt-6 flex justify-center">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-24 bg-border" />
                    <div className="h-2 w-2 rounded-full bg-primary/50" />
                    <div className="h-px w-24 bg-border" />
                  </div>
                </div>

                {/* AI Output */}
                <div className="mt-4 flex justify-center">
                  <div className="rounded-lg border border-dashed border-primary/40 bg-primary/5 px-6 py-4 text-center">
                    <div className="text-sm font-medium text-foreground">AI 理解输出</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      "XX公司是一家专注于精密铸造的制造企业，服务汽车、航空等行业..."
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <BenefitCard
            title="搜索引擎"
            description="清晰的结构让爬虫高效抓取，精准理解页面主题和关系"
            items={["百度", "Google", "必应"]}
          />
          <BenefitCard
            title="AI 助手"
            description="结构化数据让AI准确引用你的内容作为答案来源"
            items={["文心一言", "ChatGPT", "Copilot"]}
          />
          <BenefitCard
            title="行业平台"
            description="规范的实体数据便于被行业数据库和B2B平台收录"
            items={["阿里巴巴", "慧聪网", "行业黄页"]}
          />
        </div>
      </div>
    </section>
  )
}

function ReadinessItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex gap-3">
      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
      <div>
        <div className="font-medium text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}

function EntityNode({
  icon: Icon,
  title,
  schema,
  items,
}: {
  icon: typeof Layers
  title: string
  schema: string
  items: string[]
}) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      <div className="mb-3 text-[10px] uppercase tracking-wider text-muted-foreground">{schema}</div>
      <div className="space-y-1">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-primary/50" />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function BenefitCard({ title, description, items }: { title: string; description: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
