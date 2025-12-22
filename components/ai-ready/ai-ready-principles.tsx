import { FileText, Network, Layers, Code } from "lucide-react"

export function AiReadyPrinciples() {
  return (
    <section className="border-b border-border bg-secondary/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">核心原则</span>
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            AI就绪网站的四个核心原则
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-loose text-muted-foreground">
            这些原则共同构成了一个AI就绪网站的基础。它们不是独立的技术点，而是一个相互关联的系统。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <PrincipleCard
            icon={FileText}
            number="01"
            title="结构化内容"
            description="内容不是随意堆砌的文字，而是有明确层级和逻辑的信息结构。"
            items={[
              "清晰的标题层级（H1-H6）",
              "逻辑分明的章节划分",
              "定义导向的段落（每个段落回答一个明确的问题）",
            ]}
          />
          <PrincipleCard
            icon={Network}
            number="02"
            title="语义一致性"
            description="术语使用稳定，实体关系清晰，概念定义明确。"
            items={[
              "稳定的术语体系（同一概念使用相同词汇）",
              "清晰的实体关系（行业、产品、应用场景的关联）",
              "一致的概念定义（关键术语有明确的解释）",
            ]}
          />
          <PrincipleCard
            icon={Layers}
            number="03"
            title="信息架构"
            description="网站结构可预测，页面职责明确，导航关系清晰。"
            items={[
              "可预测的URL层级结构",
              "明确的页面职责（每个页面回答一个核心问题）",
              "清晰的导航和内部链接关系",
            ]}
          />
          <PrincipleCard
            icon={Code}
            number="04"
            title="机器可读性"
            description="内容不仅人类可读，机器也能准确理解和提取。"
            items={[
              "结构化的元数据（Schema.org标记）",
              "为解释而设计的内容（而非仅为阅读）",
              "清晰的语义标记和实体识别",
            ]}
          />
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-8">
          <h3 className="mb-4 text-lg font-semibold text-foreground">原则的协同作用</h3>
          <p className="leading-relaxed text-muted-foreground">
            这四个原则不是孤立的检查清单，而是一个相互强化的系统。结构化内容为语义一致性提供基础，信息架构确保机器能够导航和理解，机器可读性让AI系统能够准确提取和引用。当这四个原则同时发挥作用时，你的网站就具备了在AI驱动搜索环境中保持可见性的基础。
          </p>
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({
  icon: Icon,
  number,
  title,
  description,
  items,
}: {
  icon: typeof FileText
  number: string
  title: string
  description: string
  items: string[]
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <div className="text-xs font-mono text-muted-foreground">{number}</div>
          <h3 className="mt-1 text-xl font-semibold text-foreground">{title}</h3>
        </div>
      </div>
      <p className="mb-6 leading-relaxed text-muted-foreground">{description}</p>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-sm text-foreground">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

