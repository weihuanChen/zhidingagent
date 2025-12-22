import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { caseDetails } from "@/lib/case-data"

// 案例数据（实际项目中应该从数据库或CMS获取）
const cases = caseDetails

interface CaseDetailPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const caseItem = cases.find((c) => c.slug === slug)

  if (!caseItem) {
    return {
      title: "案例未找到 | 知定智能",
    }
  }

  return {
    title: `${caseItem.title} | 案例研究 | 知定智能`,
    description: caseItem.insight,
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
  const { slug } = await params
  const caseItem = cases.find((c) => c.slug === slug)

  if (!caseItem) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
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

        {/* Content Section */}
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="prose prose-slate max-w-none dark:prose-invert">
              {/* 核心问题 */}
              <div className="mb-12 rounded-lg border border-border bg-card p-6">
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  核心问题
                </h2>
                <p className="text-lg leading-relaxed text-foreground">{caseItem.problem}</p>
              </div>

              {/* 关键洞察 */}
              <div className="mb-12 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
                  关键洞察
                </h2>
                <p className="text-lg leading-relaxed text-foreground">{caseItem.insight}</p>
              </div>

              {/* 背景和上下文 */}
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold text-foreground">背景和上下文</h2>
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {caseItem.background}
                </div>
              </div>

              {/* 结构挑战 */}
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold text-foreground">结构挑战</h2>
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {caseItem.challenge}
                </div>
              </div>

              {/* 架构或SEO设计方法 */}
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold text-foreground">架构设计方法</h2>
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {caseItem.approach}
                </div>
              </div>

              {/* 关键决策和权衡 */}
              <div className="mb-12">
                <h2 className="mb-4 text-xl font-semibold text-foreground">关键决策和权衡</h2>
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {caseItem.decisions}
                </div>
              </div>

              {/* 结果或学习 */}
              <div className="mb-12 rounded-lg border border-border bg-card p-6">
                <h2 className="mb-4 text-xl font-semibold text-foreground">结果与学习</h2>
                <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                  {caseItem.outcomes}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

