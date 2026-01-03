export type CaseType = "practice" | "client" | "demo"

export interface CaseListItem {
  id: string
  slug: string
  title: string
  type: CaseType
  industry: string
  problem: string
  insight: string
  tags?: string[]
}

export interface CaseDetail extends CaseListItem {
  background: string
  challenge: string
  approach: string
  decisions: string
  outcomes: string
}

// 案例列表数据（用于列表页）
export const caseList: CaseListItem[] = [
  {
    id: "7",
    slug: "seo-first-architecture",
    title: "SEO-first 信息架构落地",
    type: "demo",
    industry: "网站建设",
    problem: "如何把 SEO-first 理念真正落到网站结构里，而不是事后补救？",
    insight: "从搜索需求反推信息架构：先建主题树和URL模式，再落内容和内部链接，确保搜索和用户都能读懂。",
    tags: ["SEO-first", "信息架构", "站点结构"],
  },
  {
    id: "1",
    slug: "manufacturing-product-architecture",
    title: "制造业产品架构实践",
    type: "practice",
    industry: "精密制造",
    problem: "如何为200+产品SKU建立清晰的SEO结构，让每个产品都能被搜索引擎理解？",
    insight: "采用层级化产品分类 + 属性组合页面，通过URL结构和内部链接建立语义关联。",
    tags: ["产品架构", "SKU管理"],
  },
  {
    id: "2",
    slug: "b2b-inquiry-system",
    title: "B2B询盘系统的SEO设计",
    type: "client",
    industry: "工业设备",
    problem: "B2B客户需要技术文档和产品信息，但传统网站结构无法有效承载长尾查询。",
    insight: "将技术文档结构化，建立问题-解决方案-产品的三层关联，配合结构化数据提升理解度。",
    tags: ["B2B", "技术文档"],
  },
  {
    id: "3",
    slug: "multi-language-structure",
    title: "多语言站点的统一架构",
    type: "practice",
    industry: "出口制造",
    problem: "中英文站点如何保持结构一致性，同时满足不同市场的搜索习惯？",
    insight: "使用统一的URL结构模式，通过hreflang和内容策略差异，而非结构差异来区分市场。",
    tags: ["多语言", "国际化"],
  },
  {
    id: "4",
    slug: "content-matrix-strategy",
    title: "内容矩阵的SEO结构",
    type: "client",
    industry: "消费品",
    problem: "内容营销需要大量页面，但如何避免内容孤岛和关键词竞争？",
    insight: "建立主题集群（Topic Cluster）结构，核心页面 + 支持页面的层级关系，通过内部链接传递权重。",
    tags: ["内容营销", "主题集群"],
  },
  {
    id: "5",
    slug: "ai-ready-schema",
    title: "AI就绪的结构化数据设计",
    type: "demo",
    industry: "通用",
    problem: "如何让网站结构既满足搜索引擎，又便于AI工具理解和提取？",
    insight: "采用Schema.org标准，配合清晰的HTML语义化，建立机器可读的内容层次。",
    tags: ["结构化数据", "AI就绪"],
  },
  {
    id: "6",
    slug: "structured-system-for-long-tail-content",
    title: "长尾内容的结构化系统",
    type: "practice",
    industry: "技术服务",
    problem: "如何系统化地覆盖长尾关键词，而不陷入内容生产的无限循环？",
    insight: "建立内容模板系统，通过参数化生成页面，确保结构一致性和可维护性。",
    tags: ["长尾关键词", "内容系统"],
  },
]

// 案例详情数据（用于详情页）
export const caseDetails: CaseDetail[] = [
  {
    id: "7",
    slug: "seo-first-architecture",
    title: "SEO-first 信息架构落地",
    type: "demo",
    industry: "网站建设",
    problem: "如何把 SEO-first 理念真正落到网站结构里，而不是事后补救？",
    insight: "从搜索需求反推信息架构：先建主题树和URL模式，再落内容和内部链接，确保搜索和用户都能读懂。",
    tags: ["SEO-first", "信息架构", "站点结构"],
    background: `这是一个完全以 SEO-first 思路搭建的自研站点。目标是让网站从第一天起就具备清晰的主题骨架，而不是先做页面再补救。`,
    challenge: `主要挑战：
1. 没有现成的信息架构，需要从0到1建立主题层级
2. 同时兼顾用户导航、搜索意图和业务转化路径
3. 需要让搜索引擎快速理解新站点的主题权重分布`,
    approach: `采用"搜索意图反推结构"的方法：
1. 需求调研：围绕目标用户的问题和搜索词，整理主题树（主题>子主题>问题/解决方案）
2. URL模式：确定 /case/、/insights/、/services/ 的固定模式，并为主题和问题预留可扩展路径
3. 模板化布局：为不同内容类型（案例、洞察、服务）定义固定的语义区块和标题层级
4. 链接策略：主导航覆盖主题层，侧栏/页内导航覆盖子主题，正文穿插问题-解决方案-案例的互链
5. 元数据：在规划阶段就写好title/description模式，保证每个节点的意图明确`,
    decisions: `1. 结构先行 vs 页面先行
   - 权衡：结构先行需要更多前期规划，但能避免后期返工
   - 决策：先产出主题树和URL规范，再进入视觉与开发

2. URL深度
   - 权衡：深层级更语义化 vs 扁平更易管理
   - 决策：保持两层深度，使用清晰的slug命名，避免日期/ID型路径

3. 链接布局
   - 权衡：过度互链可能显得刻意 vs 链接不足导致权重分散
   - 决策：核心页面使用模块化的"相关案例/相关洞察"区块，基于主题匹配自动填充`,
    outcomes: `1. 新站上线后两周内核心主题被完整索引
2. 案例和洞察之间形成稳定的语义互链，提升长尾覆盖
3. 后续新增内容只需挂载到既定主题节点，结构稳定、维护成本低
4. 业务侧能直观看到"主题>页面"的映射，方便持续扩展`,
  },
  {
    id: "1",
    slug: "manufacturing-product-architecture",
    title: "制造业产品架构实践",
    type: "practice",
    industry: "精密制造",
    problem: "如何为200+产品SKU建立清晰的SEO结构，让每个产品都能被搜索引擎理解？",
    insight: "采用层级化产品分类 + 属性组合页面，通过URL结构和内部链接建立语义关联。",
    tags: ["产品架构", "SKU管理"],
    background: `这是一个个人实践项目，目标是探索大规模产品目录的SEO架构设计。传统电商网站往往采用扁平化的产品列表，但这种方式在SEO上存在明显局限：产品页面之间缺乏语义关联，搜索引擎难以理解产品分类体系。`,
    challenge: `主要挑战包括：
1. 200+产品SKU需要清晰的分类体系
2. 每个产品有多个属性（材质、规格、应用场景等）
3. 需要同时满足用户导航和搜索引擎理解
4. 结构需要可扩展，便于后续添加新产品`,
    approach: `采用三层架构设计：
1. 一级分类：按产品大类（如"精密零件"、"定制加工"）
2. 二级分类：按应用场景或技术特性
3. 产品页面：单个SKU详情页

关键设计决策：
- URL结构：/category/subcategory/product-slug
- 属性组合页面：为常见属性组合创建聚合页面（如"不锈钢+精密加工"）
- 内部链接：产品页面链接到相关分类和属性组合页
- 面包屑导航：清晰展示层级关系`,
    decisions: `1. 选择层级化而非扁平化结构
   - 权衡：层级化可能增加点击深度，但语义更清晰
   - 决策：通过内部链接和属性组合页平衡深度问题

2. 属性组合页面的创建策略
   - 权衡：创建太多组合页可能稀释权重
   - 决策：只创建有实际搜索量的属性组合（基于关键词研究）

3. 产品页面的内容策略
   - 权衡：详细技术参数 vs 简洁描述
   - 决策：核心信息在页面，详细参数通过结构化数据提供`,
    outcomes: `1. 结构清晰度：搜索引擎能够理解产品分类体系
2. 收录效率：新添加的产品页面能够快速被索引
3. 用户体验：清晰的导航结构提升了用户停留时间
4. 可扩展性：后续添加新产品只需遵循既定结构模式`,
  },
  {
    id: "2",
    slug: "b2b-inquiry-system",
    title: "B2B询盘系统的SEO设计",
    type: "client",
    industry: "工业设备",
    problem: "B2B客户需要技术文档和产品信息，但传统网站结构无法有效承载长尾查询。",
    insight: "将技术文档结构化，建立问题-解决方案-产品的三层关联，配合结构化数据提升理解度。",
    tags: ["B2B", "技术文档"],
    background: `这是一个匿名化的客户项目。客户是一家工业设备制造商，主要面向B2B市场。他们的产品技术性强，客户在采购前需要大量技术信息。`,
    challenge: `主要挑战：
1. 技术文档分散，难以被搜索引擎索引
2. 客户查询往往是问题导向（"如何解决X问题"）而非产品导向
3. 需要平衡技术深度和可读性`,
    approach: `建立问题-解决方案-产品的三层结构：
1. 问题页面：针对常见技术问题创建专题页
2. 解决方案页面：详细说明解决方案，链接到相关产品
3. 产品页面：技术规格和文档

关键设计：
- 使用FAQ Schema标记常见问题
- 技术文档采用分层结构（概述-详细-下载）
- 建立问题与产品的双向关联`,
    decisions: `1. 问题页面的创建策略
   - 权衡：覆盖所有问题 vs 聚焦高频问题
   - 决策：先创建搜索量>100的问题页面，后续根据数据扩展

2. 技术文档的展示方式
   - 权衡：全文展示 vs 摘要+下载
   - 决策：核心内容在页面，完整文档提供下载（满足SEO和用户体验）`,
    outcomes: `1. 长尾关键词覆盖：问题页面覆盖了大量长尾查询
2. 询盘质量提升：通过问题页面来的询盘更精准
3. 技术文档的SEO价值得到释放`,
  },
  {
    id: "3",
    slug: "multi-language-structure",
    title: "多语言站点的统一架构",
    type: "practice",
    industry: "出口制造",
    problem: "中英文站点如何保持结构一致性，同时满足不同市场的搜索习惯？",
    insight: "使用统一的URL结构模式，通过hreflang和内容策略差异，而非结构差异来区分市场。",
    tags: ["多语言", "国际化"],
    background: `个人实践项目，探索多语言站点的SEO架构。目标是建立一个既满足中文市场又满足英文市场的统一结构。`,
    challenge: `主要挑战：
1. 中英文市场的搜索习惯不同
2. 需要避免内容重复问题
3. 结构需要便于维护和扩展`,
    approach: `采用统一URL结构 + 内容差异化策略：
- URL结构：/zh/ 和 /en/ 前缀，后续路径保持一致
- hreflang标记：明确语言和地区关系
- 内容策略：相同结构，但内容针对市场定制
- 内部链接：保持结构一致性`,
    decisions: `1. URL结构选择
   - 权衡：子域名 vs 路径前缀
   - 决策：选择路径前缀，便于统一管理和权重集中

2. 内容差异化程度
   - 权衡：完全本地化 vs 保持一致性
   - 决策：结构一致，内容针对市场优化`,
    outcomes: `1. 搜索引擎能够清晰理解语言关系
2. 维护成本降低（统一结构）
3. 两个市场都能获得良好的SEO表现`,
  },
  {
    id: "4",
    slug: "content-matrix-strategy",
    title: "内容矩阵的SEO结构",
    type: "client",
    industry: "消费品",
    problem: "内容营销需要大量页面，但如何避免内容孤岛和关键词竞争？",
    insight: "建立主题集群（Topic Cluster）结构，核心页面 + 支持页面的层级关系，通过内部链接传递权重。",
    tags: ["内容营销", "主题集群"],
    background: `匿名化客户项目。客户希望通过内容营销建立品牌认知，需要创建大量内容页面。`,
    challenge: `主要挑战：
1. 需要创建50+内容页面
2. 避免页面之间关键词竞争
3. 确保内容之间有逻辑关联`,
    approach: `采用主题集群（Topic Cluster）架构：
1. 核心页面（Pillar Page）：覆盖核心主题
2. 支持页面（Cluster Content）：围绕核心主题的细分内容
3. 内部链接：所有支持页面链接到核心页面，核心页面链接到相关支持页面

结构示例：
- 核心页面：/gift-tea-guide/
- 支持页面：/gift-tea-guide/birthday/、/gift-tea-guide/festival/ 等`,
    decisions: `1. 主题划分策略
   - 权衡：宽泛主题 vs 细分主题
   - 决策：选择3-5个核心主题，每个主题下10-15个支持页面

2. 内部链接密度
   - 权衡：密集链接 vs 自然链接
   - 决策：核心页面链接到所有相关支持页面，支持页面链接回核心页面`,
    outcomes: `1. 核心关键词排名提升
2. 长尾关键词覆盖增加
3. 页面之间形成权重传递
4. 用户体验提升（相关内容发现）`,
  },
  {
    id: "5",
    slug: "ai-ready-schema",
    title: "AI就绪的结构化数据设计",
    type: "demo",
    industry: "通用",
    problem: "如何让网站结构既满足搜索引擎，又便于AI工具理解和提取？",
    insight: "采用Schema.org标准，配合清晰的HTML语义化，建立机器可读的内容层次。",
    tags: ["结构化数据", "AI就绪"],
    background: `这是一个演示项目，探索如何设计既满足传统SEO又面向AI时代的网站结构。`,
    challenge: `主要挑战：
1. 传统SEO关注关键词和链接
2. AI工具需要结构化、语义化的内容
3. 需要平衡两者需求`,
    approach: `采用多层结构化策略：
1. HTML语义化：使用正确的HTML5语义标签
2. Schema.org标记：为关键内容添加结构化数据
3. 内容层次清晰：标题层级、段落结构明确
4. 元数据完善：description、keywords等元数据`,
    decisions: `1. Schema标记的覆盖范围
   - 权衡：全面标记 vs 关键页面标记
   - 决策：核心页面全面标记，其他页面选择性标记

2. 语义化程度
   - 权衡：过度语义化 vs 适度语义化
   - 决策：保持自然，不过度优化`,
    outcomes: `1. 搜索引擎理解度提升
2. 结构化数据测试通过
3. 为AI工具提供良好基础`,
  },
  {
    id: "6",
    slug: "structured-system-for-long-tail-content",
    title: "长尾内容的结构化系统",
    type: "practice",
    industry: "技术服务",
    problem: "如何系统化地覆盖长尾关键词，而不陷入内容生产的无限循环？",
    insight: "建立内容模板系统，通过参数化生成页面，确保结构一致性和可维护性。",
    tags: ["长尾关键词", "内容系统"],
    background: `个人实践项目，探索如何系统化地创建长尾内容，而不是每次手动创建。`,
    challenge: `主要挑战：
1. 长尾关键词数量庞大
2. 手动创建效率低
3. 需要保持内容质量和结构一致性`,
    approach: `建立参数化内容系统：
1. 内容模板：为不同类型的长尾查询创建模板
2. 数据驱动：通过数据表驱动内容生成
3. 结构统一：所有页面遵循相同结构
4. 质量控制：模板确保内容质量下限`,
    decisions: `1. 模板的灵活性
   - 权衡：严格模板 vs 灵活模板
   - 决策：核心结构固定，细节可定制

2. 生成页面的数量
   - 权衡：大量生成 vs 精选生成
   - 决策：基于搜索量数据，只生成有实际搜索量的页面`,
    outcomes: `1. 内容生产效率大幅提升
2. 结构一致性得到保证
3. 长尾关键词覆盖增加
4. 维护成本降低`,
  },
]
