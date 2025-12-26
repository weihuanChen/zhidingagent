import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MarkdownContent } from "@/components/markdown/markdown-content"

const markdown = String.raw`
# 结构化数据：让 AI 理解你的内容

AI 搜索依赖可解析的语义信号；Schema.org 是最稳健的载体。重点是“少而准”，用真实业务字段填充，而不是堆砌关键词。

## 为什么现在必须上 Schema
- AI 摘要会跳过纯文本，优先读取结构化字段（名称、规格、FAQ）。  
- GEO 感知检索要求地址、服务区域、营业时间等字段完备。  
- SERP 富摘要和多模态结果（图片、视频、PDF）都依赖标记。

## 优先类型与映射
- **Article**：博客/知识库。填充 \`headline\`、\`datePublished\`、\`author\`、\`image\`、\`keywords\`。
- **Product / Service**：核心产品与方案；务必给 \`sku\`/内部编号、\`offers.price\`、\`brand\`。
- **FAQPage**：整理一问一答，避免长段落。  
- **HowTo**：安装/操作步骤；用 \`step\` + \`tool\`/\`supply\`。
- **BreadcrumbList**：保持 URL 分层与信息架构一致。

## JSON-LD 示例（B2B 产品）
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://zhidingagent.com/products/cnc-robotic-arm",
  "name": "CNC 机器人手臂",
  "description": "用于金属加工的六轴工业机器人手臂，支持自动换刀与远程监控。",
  "sku": "CNC-RA-6000",
  "brand": { "@type": "Brand", "name": "知定智能" },
  "offers": {
    "@type": "Offer",
    "price": "68000",
    "priceCurrency": "CNY",
    "availability": "https://schema.org/InStock"
  }
}
\`\`\`

## 实施清单
1) 只标记真实可见的内容，字段从 CMS/产品库读取。  
2) 为主要页面添加 \`@id\`，在 FAQ/产品/案例间复用，形成实体图。
3) 图片用可访问 URL，包含尺寸与 \`contentUrl\`。
4) 每次发布后跑富结果测试；404/301 后及时更新 \`@id\` 和 canonical。
5) 按信息架构批量覆盖（首页→类别→详情→FAQ），避免零散。

## 监控与回归
- Search Console 富媒体报告：查看错误与已验证类型。  
- 日志/监控：关注抓取频次、渲染耗时、返回体积。  
- 内容更新时同步更新 JSON-LD，避免陈旧价格或日期影响信任。
`

export const metadata: Metadata = {
  title: "结构化数据：让 AI 理解你的内容 | 知定智能",
  description:
    "使用 Schema.org 将产品、文章与 FAQ 转为可解析的结构化数据，帮助 AI 搜索正确理解与复用您的内容。",
}

export default function AiReadySchemaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              AI 就绪 · Schema 实战
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              结构化数据：让 AI 理解你的内容
            </h1>
            <p className="mt-4 text-sm text-muted-foreground">适用人群：SEO/内容负责人 · 预计阅读 4 分钟 · 更新于 2024-12</p>
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
            <MarkdownContent content={markdown} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
