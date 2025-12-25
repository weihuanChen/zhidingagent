"use client"

import { useState } from "react"

interface FaqItem {
  question: string
  answer: string | React.ReactNode
  category: string
}

interface FaqCategory {
  title: string
  description?: string
  items: FaqItem[]
}

const faqData: FaqCategory[] = [
  {
    title: "方法论与策略",
    description: "关于SEO理念和长期思维的问题",
    items: [
      {
        question: "为什么你强调长期SEO而不是短期效果？",
        answer: (
          <div className="space-y-3">
            <p>
              SEO是一个复利游戏。搜索引擎需要时间建立对网站的信任，用户需要时间发现和记住你的品牌，内容需要时间积累权威性。
            </p>
            <p>
              短期见效的方法（如关键词堆砌、大量外链购买）往往伴随着风险：算法更新可能导致排名骤降，过度优化可能触发惩罚。而基于信息架构和内容质量的长期策略，虽然见效慢，但更稳定、更可持续。
            </p>
            <p>
              我的工作重点是建立系统，而不是执行技巧。系统会在6-12个月后持续产生价值，而技巧可能在3个月后失效。
            </p>
          </div>
        ),
        category: "方法论与策略",
      },
      {
        question: "你的方法与传统SEO服务有什么不同？",
        answer: (
          <div className="space-y-3">
            <p>
              传统SEO服务通常从关键词研究开始，然后优化现有页面、建设外链。我的方法是从信息架构开始。
            </p>
            <p>
              在写第一行内容之前，我会先确保网站的结构能被搜索引擎理解：URL层级是否清晰、页面关系是否合理、内容组织是否符合用户意图。这就像建房子先打地基，而不是先装修。
            </p>
            <p>
              另一个区别是，我不承诺&ldquo;保证排名&rdquo;或&ldquo;快速见效&rdquo;。我承诺的是建立可测量的、可持续的增长系统。这个系统会在长期内产生自然流量，而不是依赖某个特定关键词的排名。
            </p>
          </div>
        ),
        category: "方法论与策略",
      },
      {
        question: "为什么你首先关注结构和信息架构？",
        answer: (
          <div className="space-y-3">
            <p>
              再好的内容，如果结构不对，搜索引擎也难以理解。信息架构决定了搜索引擎如何抓取、索引和理解你的网站。
            </p>
            <p>
              一个清晰的信息架构意味着：用户能快速找到需要的信息，搜索引擎能理解页面之间的关系，新内容有明确的归属位置。这为后续的内容创作和优化提供了基础。
            </p>
            <p>
              我见过太多网站，内容质量很高，但因为结构混乱，搜索引擎无法有效索引，用户也难以导航。先建立正确的结构，再填充内容，效率更高，效果更好。
            </p>
          </div>
        ),
        category: "方法论与策略",
      },
      {
        question: "在平台和AI驱动的流量环境中，SEO还有效吗？",
        answer: (
          <div className="space-y-3">
            <p>
              有效，但需要重新理解SEO的定义。传统的&ldquo;在Google上排名第一&rdquo;不再是唯一目标。现在需要考虑：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>搜索引擎结果页（SERP）中的多种展示形式（知识图谱、精选摘要、本地包等）</li>
              <li>AI助手（如ChatGPT、Claude）如何引用和展示你的内容</li>
              <li>社交媒体和内容平台的搜索功能</li>
              <li>直接访问和品牌搜索的增长</li>
            </ul>
            <p>
              我的方法是将网站构建为&ldquo;AI就绪&rdquo;的结构：使用结构化数据、清晰的语义标记、权威的内容组织。这样，无论是传统搜索引擎还是AI助手，都能更好地理解和引用你的内容。
            </p>
            <p>
              平台流量是补充，不是替代。一个结构良好的网站可以同时从多个渠道获得流量，而不会过度依赖单一平台。
            </p>
          </div>
        ),
        category: "方法论与策略",
      },
    ],
  },
  {
    title: "服务范围与责任边界",
    description: "明确什么包含在服务中，什么不包含",
    items: [
      {
        question: "你的服务具体包含什么？",
        answer: (
          <div className="space-y-3">
            <p>根据不同的服务模式，包含的内容不同：</p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>网站结构搭建：</strong>信息架构设计、URL结构规划、页面模板开发、技术SEO实施（sitemap、robots.txt、结构化数据等）
              </li>
              <li>
                <strong>SEO咨询支持：</strong>内容策略建议、关键词研究、竞争对手分析、技术审计、优化建议
              </li>
              <li>
                <strong>年度运营：</strong>月度内容规划、性能监控、数据分析报告、持续优化、问题排查
              </li>
            </ul>
            <p>
              所有服务模式都包含：网站性能优化、移动端适配、基础安全配置、SEO工具配置（如Google Search Console、Analytics）。
            </p>
          </div>
        ),
        category: "服务范围与责任边界",
      },
      {
        question: "什么不包含在你的服务中？",
        answer: (
          <div className="space-y-3">
            <p>以下内容通常不在服务范围内：</p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>域名和主机：</strong>由客户自行购买和管理。我会提供技术要求和推荐，但不负责采购。
              </li>
              <li>
                <strong>大量内容创作：</strong>我可以提供内容策略和框架，但大量文章写作通常需要客户团队或外包。我会审核和优化内容，但不负责从零创作所有内容。
              </li>
              <li>
                <strong>付费广告：</strong>我不管理Google Ads、百度推广等付费广告。我的重点是自然搜索流量。
              </li>
              <li>
                <strong>社交媒体运营：</strong>不包含社交媒体内容创作和发布。
              </li>
              <li>
                <strong>品牌设计：</strong>我可以提供UI/UX建议以支持SEO，但不负责完整的品牌视觉设计。
              </li>
            </ul>
            <p>
              如果项目需要这些服务，我会推荐合适的合作伙伴或提供清晰的实施建议。
            </p>
          </div>
        ),
        category: "服务范围与责任边界",
      },
      {
        question: "客户需要承担哪些责任？",
        answer: (
          <div className="space-y-3">
            <p>为了项目成功，客户需要提供：</p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>域名和主机访问权限：</strong>需要提供域名DNS管理权限和主机FTP/SSH访问权限
              </li>
              <li>
                <strong>内容素材：</strong>产品信息、公司介绍、案例资料、图片资源等基础内容
              </li>
              <li>
                <strong>决策和反馈：</strong>及时回复设计和技术方案的反馈，做出关键决策（如URL结构、页面布局等）
              </li>
              <li>
                <strong>内容审核：</strong>对发布的内容进行最终审核，确保信息准确
              </li>
              <li>
                <strong>长期维护：</strong>在项目交付后，定期更新内容、监控性能、响应问题
              </li>
            </ul>
            <p>
              我建议客户指定一个项目负责人，负责协调内部资源和提供反馈。这样可以提高沟通效率，避免信息断层。
            </p>
          </div>
        ),
        category: "服务范围与责任边界",
      },
      {
        question: "访问权限和协作要求是什么？",
        answer: (
          <div className="space-y-3">
            <p>为了完成工作，我需要以下访问权限：</p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>域名DNS：</strong>用于配置子域名、SSL证书、邮件记录等
              </li>
              <li>
                <strong>主机/服务器：</strong>用于部署代码、配置环境、安装工具
              </li>
              <li>
                <strong>内容管理系统：</strong>如果使用CMS，需要管理员权限
              </li>
              <li>
                <strong>Google Search Console：</strong>用于提交sitemap、监控索引状态
              </li>
              <li>
                <strong>Google Analytics：</strong>用于分析流量和用户行为（如果需要）
              </li>
            </ul>
            <p>
              所有权限都仅用于项目相关的工作。项目结束后，可以根据需要保留或撤销权限。我建议保留Search Console和Analytics的访问权限，以便持续监控和优化。
            </p>
            <p>
              协作方式：主要通过邮件和定期会议（视频或电话）。紧急问题可以通过即时通讯工具联系。我会提供清晰的项目时间表和里程碑，确保双方对进度有共同的理解。
            </p>
          </div>
        ),
        category: "服务范围与责任边界",
      },
    ],
  },
  {
    title: "工具与数据",
    description: "关于分析工具和性能评估",
    items: [
      {
        question: "你使用哪些分析或SEO工具？",
        answer: (
          <div className="space-y-3">
            <p>
              我主要使用以下工具（具体选择取决于项目需求）：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>Google Search Console：</strong>监控索引状态、搜索表现、技术问题
              </li>
              <li>
                <strong>Google Analytics：</strong>分析流量来源、用户行为、转化路径
              </li>
              <li>
                <strong>技术SEO工具：</strong>用于页面速度测试、移动友好性检查、结构化数据验证
              </li>
              <li>
                <strong>关键词研究工具：</strong>用于了解搜索意图和竞争情况
              </li>
            </ul>
            <p>
              工具的选择基于实用性和可持续性。我不追求使用最新或最贵的工具，而是选择稳定、可靠、能长期使用的方案。重点是工具能提供可操作的数据，而不是漂亮的报告。
            </p>
          </div>
        ),
        category: "工具与数据",
      },
      {
        question: "客户需要自己购买工具吗？",
        answer: (
          <div className="space-y-3">
            <p>
              基础工具（如Google Search Console、Google Analytics）是免费的，我会协助配置和使用。
            </p>
            <p>
              如果项目需要付费工具（如高级SEO分析工具、内容研究工具），我会在项目开始前说明，并讨论成本承担方式。通常有两种选择：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>工具费用包含在服务费中（适合短期项目）</li>
              <li>客户自行购买，我提供使用指导（适合长期合作）</li>
            </ul>
            <p>
              我的原则是：优先使用免费工具，只在必要时使用付费工具。所有工具选择都会提前沟通，不会有隐藏费用。
            </p>
          </div>
        ),
        category: "工具与数据",
      },
      {
        question: "如何评估长期SEO项目的表现？",
        answer: (
          <div className="space-y-3">
            <p>
              我使用多个指标来评估项目表现，而不是单一的关键词排名：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>自然搜索流量：</strong>来自搜索引擎的访问量趋势
              </li>
              <li>
                <strong>索引页面数：</strong>被搜索引擎收录的页面数量
              </li>
              <li>
                <strong>平均排名位置：</strong>所有关键词的平均排名（而非单个关键词）
              </li>
              <li>
                <strong>点击率（CTR）：</strong>搜索结果中的点击率
              </li>
              <li>
                <strong>转化指标：</strong>询盘、表单提交、电话咨询等业务目标
              </li>
            </ul>
            <p>
              我会定期（通常每月）提供数据报告，解释趋势变化和优化建议。报告的重点是&ldquo;为什么&rdquo;和&ldquo;接下来做什么&rdquo;，而不是罗列数字。
            </p>
            <p>
              重要的是，SEO效果需要时间积累。前3个月可能看不到明显变化，这是正常的。我会在项目开始前设定合理的基准线和预期，避免过早判断项目成败。
            </p>
          </div>
        ),
        category: "工具与数据",
      },
    ],
  },
  {
    title: "时间预期与成功标准",
    description: "关于SEO见效时间和项目期望",
    items: [
      {
        question: "SEO通常需要多长时间才能看到效果？",
        answer: (
          <div className="space-y-3">
            <p>
              这取决于项目的起点和类型：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>新网站：</strong>通常需要6-12个月才能建立稳定的自然流量。前3个月主要是技术基础建设和内容积累，流量增长不明显。
              </li>
              <li>
                <strong>已有网站优化：</strong>如果网站已有一定基础，3-6个月可能看到改善。但大幅增长仍需要6-12个月。
              </li>
              <li>
                <strong>竞争激烈的行业：</strong>可能需要12-18个月才能达到理想状态。
              </li>
            </ul>
            <p>
              我无法承诺&ldquo;3个月见效&rdquo;，因为这不现实。但我可以承诺：在6-12个月内，你会看到可测量的、持续的增长趋势。这个增长不是线性的，可能会有波动，但整体方向是向上的。
            </p>
            <p>
              如果你需要立即见效，SEO可能不是最佳选择。应该考虑付费广告或其他短期营销手段。SEO是长期投资，适合有耐心、追求可持续增长的企业。
            </p>
          </div>
        ),
        category: "时间预期与成功标准",
      },
      {
        question: "前3-6个月我们应该期待什么？",
        answer: (
          <div className="space-y-3">
            <p>
              前3-6个月是基础建设期，主要成果包括：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>技术基础：</strong>网站结构优化、页面速度提升、移动端适配、结构化数据实施
              </li>
              <li>
                <strong>内容基础：</strong>核心页面优化、基础内容创建、内部链接建设
              </li>
              <li>
                <strong>索引状态：</strong>搜索引擎开始抓取和索引新页面，索引页面数逐步增加
              </li>
              <li>
                <strong>早期信号：</strong>可能开始有一些长尾关键词的排名，但流量还很小
              </li>
            </ul>
            <p>
              这个阶段的关键是&ldquo;建立基础，而非追求流量&rdquo;。如果基础打得好，后续的增长会更快、更稳定。如果急于求成，跳过基础建设，可能会在后期遇到瓶颈。
            </p>
            <p>
              我会在这个阶段提供详细的进度报告，解释每项工作的目的和预期影响。即使流量增长不明显，你也能看到系统在逐步建立。
            </p>
          </div>
        ),
        category: "时间预期与成功标准",
      },
      {
        question: '长期SEO项目的"成功"是什么样的？',
        answer: (
          <div className="space-y-3">
            <p>
              &ldquo;成功&rdquo;不是单一指标，而是一个系统的健康状态：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>稳定的自然流量增长：</strong>每月自然搜索流量持续增长，不依赖单一关键词或页面
              </li>
              <li>
                <strong>多样化的流量来源：</strong>流量来自多个关键词、多个页面，降低单一依赖风险
              </li>
              <li>
                <strong>品牌搜索增长：</strong>直接搜索品牌名的用户增加，说明品牌认知度提升
              </li>
              <li>
                <strong>业务转化：</strong>自然流量带来实际的业务询盘、表单提交或销售
              </li>
              <li>
                <strong>系统自主运行：</strong>即使减少主动优化，网站仍能持续获得流量（说明系统已建立）
              </li>
            </ul>
            <p>
              成功不是&ldquo;某个关键词排名第一&rdquo;，而是&ldquo;网站成为目标用户在搜索相关问题时能找到的可靠来源&rdquo;。这意味着即使算法更新、竞争加剧，你的网站仍能保持稳定的表现。
            </p>
            <p>
              我会在项目开始前与客户讨论成功标准，确保双方对&ldquo;成功&rdquo;有共同的理解。这个标准应该是可测量的、现实的、与业务目标相关的。
            </p>
          </div>
        ),
        category: "时间预期与成功标准",
      },
    ],
  },
  {
    title: "协作与沟通",
    description: "关于工作方式和沟通频率",
    items: [
      {
        question: "项目期间我们如何沟通？",
        answer: (
          <div className="space-y-3">
            <p>
              沟通方式根据项目阶段和需求灵活调整：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>邮件：</strong>主要的正式沟通渠道，用于发送报告、方案、重要决策
              </li>
              <li>
                <strong>定期会议：</strong>通常每2-4周一次视频或电话会议，讨论进度、问题和下一步计划
              </li>
              <li>
                <strong>即时通讯：</strong>用于快速问题和紧急情况（如网站故障）
              </li>
              <li>
                <strong>项目管理工具：</strong>如果需要，可以使用Trello、Notion等工具跟踪任务
              </li>
            </ul>
            <p>
              我倾向于&ldquo;异步优先&rdquo;的沟通方式：通过邮件和文档进行详细沟通，减少不必要的会议。这样可以提高效率，也给双方更多思考时间。
            </p>
            <p>
              重要决策（如URL结构、页面布局、内容策略）会通过文档详细说明，并等待确认后再执行。日常的技术实施通常不需要频繁确认，除非遇到问题。
            </p>
          </div>
        ),
        category: "协作与沟通",
      },
      {
        question: "多久进行一次进度回顾或检查？",
        answer: (
          <div className="space-y-3">
            <p>
              根据服务模式不同，回顾频率也不同：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>网站建设阶段：</strong>每2周一次进度同步，每4周一次正式回顾
              </li>
              <li>
                <strong>SEO咨询支持：</strong>每月一次数据报告和优化建议
              </li>
              <li>
                <strong>年度运营：</strong>每月一次数据报告，每季度一次深度分析和策略调整
              </li>
            </ul>
            <p>
              每次回顾会包括：已完成的工作、数据变化、发现的问题、下一步计划。我会提供清晰的行动项和时间表。
            </p>
            <p>
              如果客户需要更频繁的沟通，可以提前说明。但我建议保持合理的频率，避免过度沟通影响实际工作进度。
            </p>
          </div>
        ),
        category: "协作与沟通",
      },
      {
        question: "你是独立工作还是与合作伙伴协作？",
        answer: (
          <div className="space-y-3">
            <p>
              我主要独立工作，负责SEO策略、技术实施、数据分析等核心工作。
            </p>
            <p>
              但在某些情况下，我会与合作伙伴协作：
            </p>
            <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
              <li>
                <strong>内容创作：</strong>如果需要大量文章，我会推荐专业的内容写手或团队
              </li>
              <li>
                <strong>设计工作：</strong>如果需要复杂的视觉设计，我会与设计师协作
              </li>
              <li>
                <strong>开发工作：</strong>如果项目需要复杂的定制开发，我会与开发人员协作
              </li>
            </ul>
            <p>
              所有合作伙伴都是经过筛选的，我会确保他们的工作质量符合项目标准。客户可以直接与合作伙伴沟通，也可以通过我协调。
            </p>
            <p>
              我的原则是：保持对项目整体的控制和质量标准，但在专业领域（如设计、写作）信任合作伙伴的专业能力。这样可以提高效率，同时确保最终交付物符合预期。
            </p>
          </div>
        ),
        category: "协作与沟通",
      },
    ],
  },
]

function FaqItemComponent({ item }: { item: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left transition-colors hover:text-foreground"
        aria-expanded={isOpen}
      >
        <span className="flex-1 font-medium leading-relaxed text-foreground">{item.question}</span>
        <span
          className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ↓
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 text-muted-foreground animate-fade-in">
          <div className="leading-relaxed">{item.answer}</div>
        </div>
      )}
    </div>
  )
}

export function FaqList() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-16">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold text-foreground">{category.title}</h2>
                {category.description && (
                  <p className="text-muted-foreground">{category.description}</p>
                )}
              </div>
              <div className="space-y-0">
                {category.items.map((item, itemIndex) => (
                  <FaqItemComponent key={itemIndex} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

