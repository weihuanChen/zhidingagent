import type { Metadata } from "next"
import Link from "next/link"
import { unstable_noStore as noStore } from "next/cache"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MarkdownContent } from "@/components/markdown/markdown-content"
import { getPostBySlugFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"
import type { CaseDetail, CaseType } from "@/lib/case-data"
import type { BlogPost } from "@/lib/types"

export const revalidate = 3600
export const dynamic = "force-dynamic"

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

const getCasePost = async (slug: string): Promise<BlogPost | null> =>
  getPostBySlugFromCMS(slug, "zh", SITE_ID, "case")

type CaseDetailPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  noStore()
  const { slug } = await params
  const post = await getCasePost(slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

  if (!post) {
    return {
      title: "案例未找到 | 知定智能",
      robots: "noindex,follow",
    }
  }

  const canonical = `${baseUrl}/case/${slug}`

  return {
    title: `${post.title} | 案例研究 | 知定智能`,
    description: post.description,
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
  noStore()
  const { slug } = await params
  const post = await getCasePost(slug)

  if (!post) {
    notFound()
  }

  const caseItem = mapPostToCaseDetail(post)
  const content = caseItem.content || ""

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"
  const caseUrl = `${baseUrl}/case/${slug}`

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
      <main className="min-h-screen relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Hero Section - Magazine Style */}
        <section className="relative min-h-[70vh] flex items-center border-b border-border/40">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
            {/* Back link - subtle */}
            <Link
              href="/case"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-foreground hover:text-primary transition-all duration-300 mb-16 group"
              style={{ opacity: 1 }}
            >
              <ArrowLeft className="h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" style={{ opacity: 0.7 }} />
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">案例研究</span>
            </Link>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Main title - Large and bold */}
              <div className="lg:col-span-8 lg:col-start-1">
                <div className="space-y-8">
                  {/* Type badge - Minimal */}
                  <div className="inline-flex items-center gap-3">
                    <span className={`px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium border ${typeColors[caseItem.type]} rounded-full`}>
                      {typeLabels[caseItem.type]}
                    </span>
                    {caseItem.tags?.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs text-muted-foreground/60 tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Massive headline */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                    {caseItem.title}
                  </h1>

                  {/* Subtitle with decorative line */}
                  <div className="flex items-center gap-6 pt-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
                    <p className="text-sm md:text-base text-muted-foreground tracking-wide font-medium">
                      {caseItem.industry}
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem statement - Floating card */}
              <div className="lg:col-span-4 lg:col-start-9 lg:row-start-1">
                <div className="relative">
                  {/* Decorative number */}
                  <div className="absolute -top-6 -left-6 text-8xl font-bold text-primary/5 select-none">
                    01
                  </div>

                  <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-500">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                        核心问题
                      </h3>
                    </div>
                    <p className="text-lg leading-relaxed text-foreground font-medium">
                      {caseItem.problem}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insight Section - Dramatic presentation */}
        <section className="relative py-32 md:py-40 border-b border-border/40">
          <div className="mx-auto max-w-5xl px-6">
            <div className="relative">
              {/* Large quote mark */}
              <div className="absolute -top-12 -left-8 text-[12rem] leading-none font-serif text-primary/10 select-none">
                "
              </div>

              <div className="relative z-10 text-center space-y-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary border border-primary/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground">
                    关键洞察
                  </span>
                </div>

                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-primary max-w-4xl mx-auto">
                  {caseItem.insight}
                </blockquote>

                <div className="flex items-center justify-center gap-4 pt-8">
                  <div className="h-px w-24 bg-border" />
                  <div className="w-2 h-2 rounded-full border-2 border-primary/30" />
                  <div className="h-px w-24 bg-border" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section - Enhanced readability */}
        <section className="relative py-20 md:py-32">
          <div className="mx-auto max-w-4xl px-6">
            {content ? (
              <div className="prose prose-lg prose-slate max-w-none dark:prose-invert
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-4
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-p:text-lg
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:underline-offset-4 prose-a:decoration-2 prose-a:decoration-primary/30 hover:prose-a:decoration-primary/60
                prose-strong:text-foreground prose-strong:font-semibold
                prose-code:text-foreground prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:text-sm prose-code:font-mono
                prose-pre:bg-card prose-pre:border prose-pre:border-border
                prose-img:rounded-xl prose-img:shadow-lg
                prose-ul:list-disc prose-ul:space-y-3 prose-ul:pl-6
                prose-ol:list-decimal prose-ol:space-y-3 prose-ol:pl-6
                prose-li:text-muted-foreground/90
                prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-primary/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                prose-hr:border-border/40 prose-hr:my-16
              ">
                <MarkdownContent content={content} />
              </div>
            ) : (
              <div className="space-y-24">
                {/* Background */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                      02
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      背景和上下文
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none dark:prose-invert pl-0 md:pl-24">
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {caseItem.background}
                    </p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                      03
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      结构挑战
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none dark:prose-invert pl-0 md:pl-24">
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {caseItem.challenge}
                    </p>
                  </div>
                </div>

                {/* Approach */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                      04
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      架构设计方法
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none dark:prose-invert pl-0 md:pl-24">
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {caseItem.approach}
                    </p>
                  </div>
                </div>

                {/* Decisions */}
                <div className="group">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                      05
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                      关键决策和权衡
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none dark:prose-invert pl-0 md:pl-24">
                    <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                      {caseItem.decisions}
                    </p>
                  </div>
                </div>

                {/* Outcomes - Highlighted */}
                <div className="relative">
                  <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 via-primary to-primary/50 rounded-full" />
                  <div className="group pl-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors duration-500">
                        06
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        结果与学习
                      </h2>
                    </div>
                    <div className="prose prose-lg max-w-none dark:prose-invert pl-0 md:pl-24">
                      <p className="text-lg leading-relaxed text-foreground whitespace-pre-line font-medium">
                        {caseItem.outcomes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section - Bold and engaging */}
        <section className="relative py-32 md:py-40 border-t border-border/40 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary border border-primary/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground">
                  下一步
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-3xl mx-auto">
                想讨论如何应用到你的网站？
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                这些案例背后的思考模式可以应用到不同行业和场景。让我们一起探索如何将这些经验转化为你的竞争优势。
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="/contact">
                    开始咨询
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
