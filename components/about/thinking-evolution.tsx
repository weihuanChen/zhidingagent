import { ArrowDown } from "lucide-react"

const evolutionStages = [
  {
    period: "2018-2019",
    label: "起点",
    title: "从建站到结构意识",
    problem: "最初只是帮客户建网站。做了几个项目后发现，很多网站上线后几乎没有自然流量。",
    insight: "问题不在设计或代码，而在于网站结构从一开始就没有考虑搜索引擎的理解方式。",
    outcome: "开始研究网站架构与搜索引擎爬取逻辑的关系。",
  },
  {
    period: "2019-2021",
    label: "深入",
    title: "制造业B2B的SEO困境",
    problem: "接触了更多制造业和B2B客户，发现他们的SEO问题更加复杂——产品多、品类深、内容难组织。",
    insight: "传统SEO方法（关键词堆砌、外链建设）对这类客户效果有限。真正的问题是信息架构混乱。",
    outcome: "开始为每个项目先做信息架构规划，再进行网站建设。",
  },
  {
    period: "2021-2023",
    label: "体系化",
    title: "SEO优先的建站方法",
    problem: "意识到大多数SEO失败不是优化不够，而是网站建设阶段就埋下了隐患。",
    insight: "与其事后补救，不如从建站第一天就按SEO逻辑设计结构。网站建设和SEO应该是同一件事。",
    outcome: "形成了一套完整的「SEO优先建站」方法论，从关键词研究到网站架构一体化设计。",
  },
  {
    period: "2024-至今",
    label: "前瞻",
    title: "AI搜索与结构化数据",
    problem: "AI驱动的搜索（如Perplexity、ChatGPT搜索）正在改变用户获取信息的方式。",
    insight: "结构化数据和语义架构比以往任何时候都重要。AI需要理解实体关系，而不仅仅是关键词匹配。",
    outcome: "将Schema标记和实体架构作为标准交付内容，确保网站同时适配传统搜索和AI搜索。",
  },
]

export function ThinkingEvolution() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground">思考演进</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            我的方法论不是一开始就有的，而是在解决实际问题的过程中逐渐形成的。
            每个阶段的困惑都推动我进入下一个阶段的思考。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-8 md:space-y-0">
            {evolutionStages.map((stage, index) => (
              <div key={stage.period} className="relative md:pl-16">
                {/* Timeline marker */}
                <div className="absolute left-0 top-0 hidden md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card">
                    <span className="text-xs font-medium text-primary">{stage.label}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className="rounded-lg border border-border bg-card p-6 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground">
                      {stage.period}
                    </span>
                    <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary md:hidden">
                      {stage.label}
                    </span>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-foreground">{stage.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        遇到的问题
                      </p>
                      <p className="leading-relaxed text-foreground">{stage.problem}</p>
                    </div>

                    <div className="border-l-2 border-primary bg-primary/5 py-3 pl-4">
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">关键洞察</p>
                      <p className="leading-relaxed text-foreground">{stage.insight}</p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">结果</p>
                      <p className="leading-relaxed text-muted-foreground">{stage.outcome}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < evolutionStages.length - 1 && (
                  <div className="flex justify-center py-4 md:hidden">
                    <ArrowDown className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
