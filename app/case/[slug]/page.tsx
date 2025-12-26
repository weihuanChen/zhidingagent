import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cache } from "react"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MarkdownContent } from "@/components/markdown/markdown-content"
import { getPostBySlugFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"
import type { CaseDetail, CaseType } from "@/lib/case-data"
import { caseDetails } from "@/lib/case-data"
import type { BlogPost } from "@/lib/types"

export const revalidate = 3600

const fallbackProblem =
  "本站作为 SEO-first 理念的起点，它的设计是如何做的？我又是如何让搜索引擎理解我的网站？"
const fallbackInsight =
  "如果你正在规划一个网站，并希望它在未来几年持续产生价值，那么从信息架构开始思考，往往是最值得投入的地方。"

const normalizeText = (value?: string) => value?.replace(/\s+/g, " ").trim()

const parseQAFromDescription = (description?: string) => {
  if (!description) return { question: fallbackProblem, answer: fallbackInsight }

  const qMatch = description.match(/\[#q\]:\s*([\s\S]*?)(?=\n\[#a\]:|\n\[|$)/i)
  const aMatch = description.match(/\[#a\]:\s*([\s\S]*)/i)

  const question = normalizeText(qMatch?.[1]) || fallbackProblem
  const answer = normalizeText(aMatch?.[1]) || fallbackInsight

  return { question, answer }
}

const pickCaseType = (tags: string[] = []): CaseType => {
  const lowered = tags.map((tag) => tag.toLowerCase())
  if (lowered.includes("personal")) return "practice"
  if (lowered.includes("customer")) return "client"
  if (lowered.includes("seo-structure")) return "demo"
  if (lowered.includes("practice")) return "practice"
  if (lowered.includes("client")) return "client"
  if (lowered.includes("demo")) return "demo"
  return "practice"
}

const classificationTags = new Set(["personal", "customer", "seo-structure", "case"])

type CaseDetailData = CaseDetail & { content?: string; date?: string }

const mapPostToCaseDetail = (post: BlogPost): CaseDetailData => {
  const { question, answer } = parseQAFromDescription(post.description || post.content)
  const tagSlugs =
    post.tagDetails?.map((tag) => tag.slug).filter((slug): slug is string => Boolean(slug)) || []
  const postTags = post.tags || []
  const classificationSet = new Set([...tagSlugs, ...postTags].map((tag) => tag.toLowerCase()))
  const categories: CaseDetail["type"][] = []
  if (classificationSet.has("personal")) categories.push("practice")
  if (classificationSet.has("customer")) categories.push("client")
  if (classificationSet.has("seo-structure")) categories.push("demo")
  const type = categories[0] || pickCaseType([...tagSlugs, ...postTags])
  const mappedTags = postTags.filter((tag) => !classificationTags.has(tag.toLowerCase()))

  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    type,
    industry: post.categoryName || "案例",
    problem: question,
    insight: answer,
    tags: mappedTags,
    background: post.description || "",
    challenge: "",
    approach: "",
    decisions: "",
    outcomes: "",
    content: post.content || "",
    date: post.date,
  }
}

const getCasePost = cache(async (slug: string): Promise<BlogPost | null> =>
  getPostBySlugFromCMS(slug, "zh", SITE_ID, "case")
)

type CaseDetailPageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const post = await getCasePost(params.slug)
  const fallback = caseDetails.find((c) => c.slug === params.slug)
  const data = post ? mapPostToCaseDetail(post) : fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

  if (!data) {
    return {
      title: "案例未找到 | 知定智能",
      robots: "noindex,follow",
    }
  }

  const canonical = `${baseUrl}/case/${params.slug}`

  return {
    title: `${data.title} | 案例研究 | 知定智能`,
    description: data.insight,
    alternates: {
      canonical,
    },
  }
}

const typeLabels: Record<string, string> = {
  practice: "实践项目",
  client: "客户项目",
  demo: "结构演示",
}

const typeColors: Record<string, string> = {
  practice: "bg-primary/10 text-primary border-primary/20",
  client: "bg-secondary text-secondary-foreground border-border",
  demo: "bg-accent/10 text-accent-foreground border-accent/20",
}

export default async function CaseDetailPage({ params }: CaseDetailPageProps) {
  const post = await getCasePost(params.slug)
  const caseItem = post ? mapPostToCaseDetail(post) : caseDetails.find((c) => c.slug === params.slug)

  if (!caseItem) {
    notFound()
  }

  const content = post?.content || post?.description || ""

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"
  const caseUrl = `${baseUrl}/case/${params.slug}`

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": caseUrl,
    headline: caseItem.title,
    description: caseItem.insight || caseItem.problem || "",
    datePublished: ("date" in caseItem ? caseItem.date : undefined) || post?.date || "",
    dateModified: ("date" in caseItem ? caseItem.date : undefined) || post?.date || "",
    author: {
      "@type": "Organization",
      name: "知定智能",
    },
    publisher: {
      "@type": "Organization",
      name: "知定智能",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": caseUrl,
    },
    ...(caseItem.tags && caseItem.tags.length > 0 && {
      keywords: caseItem.tags.join(", "),
    }),
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "案例研究",
        item: `${baseUrl}/case`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseItem.title,
        item: caseUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="min-h-screen">
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/case"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              返回案例列表
            </Link>

            <div className="mb-6 flex items-center gap-2">
              <Badge
                variant="outline"
                className={`rounded-md text-xs ${typeColors[caseItem.type]}`}
              >
                {typeLabels[caseItem.type]}
              </Badge>
              {caseItem.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="rounded-md text-xs">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {caseItem.title}
            </h1>
            <p className="text-lg text-muted-foreground">{caseItem.industry}</p>
          </div>
        </section>

        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <div className="mb-12 rounded-lg border border-border bg-card p-6">
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  核心问题
                </h2>
                <p className="text-lg leading-relaxed text-foreground">{caseItem.problem}</p>
              </div>

              <div className="mb-12 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
                  关键洞察
                </h2>
                <p className="text-lg leading-relaxed text-foreground">{caseItem.insight}</p>
              </div>

              {content ? (
                <MarkdownContent content={content} />
              ) : (
                <>
                  <div className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground">背景和上下文</h2>
                    <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      {caseItem.background}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground">结构挑战</h2>
                    <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      {caseItem.challenge}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground">架构设计方法</h2>
                    <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      {caseItem.approach}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground">关键决策和权衡</h2>
                    <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      {caseItem.decisions}
                    </div>
                  </div>

                  <div className="mb-12 rounded-lg border border-border bg-card p-6">
                    <h2 className="mb-4 text-xl font-semibold text-foreground">结果与学习</h2>
                    <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                      {caseItem.outcomes}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              想讨论如何应用到你的网站？
            </h2>
            <p className="mb-8 text-muted-foreground">
              这些案例背后的思考模式可以应用到不同行业和场景。
            </p>
            <Button size="lg" className="rounded-lg" asChild>
              <Link href="/contact">开始咨询</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
