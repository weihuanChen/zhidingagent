import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cache } from "react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { MarkdownContent } from "@/components/markdown/markdown-content"
import { ArticleCta } from "@/components/insights/article-cta"
import { getPostBySlugFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"
import type { BlogPost } from "@/lib/types"

export const revalidate = 3600

const formatDate = (value?: string) => {
  if (!value) return ""
  try {
    return new Intl.DateTimeFormat("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(value))
  } catch (error) {
    return value
  }
}

const getInsightPost = cache(async (slug: string): Promise<BlogPost | null> =>
  getPostBySlugFromCMS(slug, "zh", SITE_ID, "insights")
)

type InsightPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getInsightPost(slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

  if (!post) {
    return {
      title: "文章未找到 | 知定智能",
      description: "没有找到对应的知识库文章。",
      robots: "noindex,follow",
    }
  }

  const canonical = `${baseUrl}/insights/${slug}`

  return {
    title: `${post.title} | 知定智能`,
    description: post.description ? post.description.slice(0, 150) : undefined,
    alternates: {
      canonical,
    },
  }
}

const buildTagList = (post: BlogPost) => {
  if (post.tagDetails?.length) return post.tagDetails
  if (post.tags?.length) {
    return post.tags.map((slug) => ({ slug, name: slug }))
  }
  return []
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params
  const post = await getInsightPost(slug)

  if (!post) {
    notFound()
  }

  const content = post.content || post.description || "内容即将上线，敬请期待。"
  const tags = buildTagList(post)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"
  const articleUrl = `${baseUrl}/insights/${slug}`

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": articleUrl,
    headline: post.title,
    description: post.description || "",
    datePublished: post.date,
    dateModified: post.date,
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
      "@id": articleUrl,
    },
    ...(tags.length > 0 && {
      keywords: tags.map((tag) => tag.name).join(", "),
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
        name: "知识库",
        item: `${baseUrl}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section - Reading-focused */}
        <section className="relative border-b border-border/50">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 lg:py-32">
            {/* Category label */}
            <div className="mb-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-foreground/70 hover:text-primary transition-colors"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Insights
              </Link>
            </div>

            {/* Article title - Large and elegant */}
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Description - Subtle */}
            {post.description && (
              <p className="mb-8 text-lg md:text-xl leading-relaxed text-muted-foreground/80 font-light">
                {post.description}
              </p>
            )}

            {/* Meta information - Publication style */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20">
                <svg
                  className="h-3.5 w-3.5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-foreground/90">{formatDate(post.date)}</span>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20">
                <svg
                  className="h-3.5 w-3.5 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-foreground/90">{post.readingTime} min read</span>
              </div>

              {post.categoryName || post.categorySlug ? (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                  <svg
                    className="h-3.5 w-3.5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                    />
                  </svg>
                  <span className="text-xs font-medium text-foreground">
                    {post.categoryName || post.categorySlug}
                  </span>
                </div>
              ) : null}
            </div>

            {/* Tags - Minimal */}
            {tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    href={`/insights?tag=${tag.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/5 text-foreground/80 hover:border-primary/50 hover:bg-primary/10 hover:text-foreground transition-all"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/60" />
                    {tag.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Content Section - Optimized for reading */}
        <section className="relative">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <article className="prose prose-lg prose-slate max-w-none dark:prose-invert
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground
              prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8 prose-h1:font-bold
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-semibold prose-h2:border-b prose-h2:border-border/30 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-5 prose-h3:font-medium
              prose-h4:text-xl prose-h4:mt-8 prose-h4:mb-4
              prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-p:text-base prose-p:mb-6
              prose-a:text-primary prose-a:no-underline prose-a:font-medium prose-a:border-b prose-a:border-b-primary/30 prose-a:border-dotted prose-a:hover:border-b-primary prose-a:hover:border-b-2 prose-a:transition-all
              prose-strong:text-foreground prose-strong:font-semibold
              prose-em:text-muted-foreground
              prose-code:text-foreground prose-code:bg-muted/80 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-border/50
              prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:shadow-sm
              prose-blockquote:not-italic prose-blockquote:border-l-2 prose-blockquote:border-primary/40 prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
              prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
              prose-ul:list-none prose-ul:space-y-3 prose-ul:my-6
              prose-ol:list-none prose-ol:space-y-3 prose-ol:my-6
              prose-li:flex prose-li:gap-3 prose-li:text-muted-foreground/90
              prose-li:before:content-['•'] prose-li:before:text-primary prose-li:before:font-bold prose-li:before:text-lg
              prose-ol>li:before:content-[counter(list-item)] prose-ol>li:before:font-mono prose-ol>li:before:text-sm prose-ol>li:before:text-primary prose-ol>li:before:font-semibold
              prose-hr:border-border/40 prose-hr:my-12
              prose-table:text-sm prose-table:my-6
            ">
              <MarkdownContent content={content} />
            </article>

            {/* Article CTA */}
            <div className="mt-20">
              <ArticleCta />
            </div>

            {/* Footer info */}
            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>发布于 {formatDate(post.date)}</span>
                <span className="text-muted-foreground/30">·</span>
                <span>{post.readingTime} 分钟阅读</span>
              </div>

              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
              >
                <span>更多文章</span>
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
