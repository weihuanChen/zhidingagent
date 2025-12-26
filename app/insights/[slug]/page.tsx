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
  params: { slug: string }
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const post = await getInsightPost(params.slug)
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

  if (!post) {
    return {
      title: "文章未找到 | 知定智能",
      description: "没有找到对应的知识库文章。",
      robots: "noindex,follow",
    }
  }

  const canonical = `${baseUrl}/insights/${params.slug}`

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
  const post = await getInsightPost(params.slug)

  if (!post) {
    notFound()
  }

  const content = post.content || post.description || "内容即将上线，敬请期待。"
  const tags = buildTagList(post)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"
  const articleUrl = `${baseUrl}/insights/${params.slug}`

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
        <section className="border-b border-border bg-secondary/30">
          <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">INSIGHTS</p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{post.description}</p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime} 分钟阅读</span>
              {post.categoryName || post.categorySlug ? (
                <>
                  <span>·</span>
                  <Badge variant="outline" className="border-dashed">
                    {post.categoryName || post.categorySlug}
                  </Badge>
                </>
              ) : null}
            </div>

            {tags.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag.slug} variant="secondary" className="text-xs">
                    {tag.name}
                  </Badge>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
            <MarkdownContent content={content} />

            <ArticleCta />

            <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
              <div className="text-sm text-muted-foreground">
                发布于 {formatDate(post.date)} · 预计 {post.readingTime} 分钟读完
              </div>
              <Link
                href="/insights"
                className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                ← 返回知识库
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
