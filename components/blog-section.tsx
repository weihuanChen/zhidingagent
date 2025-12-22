import { ArrowUpRight, Clock, Calendar, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const categories = [
  { label: "SEO策略", count: 12 },
  { label: "技术实现", count: 8 },
  { label: "信息架构", count: 6 },
  { label: "案例分析", count: 10 },
]

const blogPosts = [
  {
    id: 1,
    title: "制造业网站SEO：从0到1的关键词策略",
    excerpt:
      "你的潜在客户在搜索什么？如何找到那些真正能带来询盘的关键词？这篇文章分享我们在B2B制造业项目中总结的实战经验。",
    category: "SEO策略",
    date: "2024-12-15",
    readTime: "8分钟阅读",
    slug: "/blog/manufacturing-seo-keyword-strategy",
  },
  {
    id: 2,
    title: "Next.js 15 与 Core Web Vitals 优化指南",
    excerpt: "网站加载慢不仅影响用户体验，更直接影响搜索排名。我们来聊聊如何用 Next.js 最新特性让你的网站快如闪电。",
    category: "技术实现",
    date: "2024-12-10",
    readTime: "12分钟阅读",
    slug: "/blog/nextjs-core-web-vitals",
  },
  {
    id: 3,
    title: "B2B企业官网信息架构最佳实践",
    excerpt: "产品分类、解决方案、案例展示、技术文档...内容这么多，怎么组织才能让用户和搜索引擎都满意？",
    category: "信息架构",
    date: "2024-12-05",
    readTime: "10分钟阅读",
    slug: "/blog/b2b-website-information-architecture",
  },
  {
    id: 4,
    title: "中国市场SEO：百度与Google双轨优化",
    excerpt: "做外贸的企业经常问：既要做百度又要做Google，策略上有什么不同？这篇文章给你一个清晰的框架。",
    category: "SEO策略",
    date: "2024-11-28",
    readTime: "15分钟阅读",
    slug: "/blog/china-seo-baidu-google",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="border-t border-border bg-secondary/30 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header - Increased bottom margin */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">知识分享</span>
            </div>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              我们学到的，也分享给你
            </h2>
            <p className="mt-6 text-pretty text-lg leading-loose text-muted-foreground">
              SEO和网站建设不是黑魔法。这里记录我们在实际项目中的思考和经验，希望对你有帮助。
            </p>
          </div>
          <Link
            href="/blog"
            className="group flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            查看全部文章
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mb-10 rounded-xl border border-border bg-card p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-foreground">按主题浏览</span>
              <span className="text-sm text-muted-foreground">· 找到你关心的话题</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.label}
                  href={`/blog/category/${cat.label}`}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <span className="text-foreground">{cat.label}</span>
                  <span className="text-xs text-muted-foreground">({cat.count})</span>
                  <ChevronRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Blog posts grid - Increased gap */}
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, featured }: { post: (typeof blogPosts)[number]; featured?: boolean }) {
  return (
    <article
      className={`group flex flex-col rounded-xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md ${
        featured ? "md:col-span-2 md:flex-row md:gap-10" : ""
      }`}
    >
      <div className={`flex flex-1 flex-col ${featured ? "md:py-2" : ""}`}>
        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="rounded-md text-xs">
            {post.category}
          </Badge>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={post.slug} className="group/link">
          <h3
            className={`font-semibold text-foreground transition-colors group-hover/link:text-primary ${featured ? "text-xl md:text-2xl" : "text-lg"}`}
          >
            {post.title}
          </h3>
        </Link>

        {/* Excerpt - Better line-height */}
        <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{post.excerpt}</p>

        {/* Read More - Increased top margin */}
        <Link
          href={post.slug}
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          阅读全文
          <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  )
}
