import Link from "next/link"

export function AboutHero() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <span className="text-foreground">关于</span>
        </nav>

        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs tracking-wider text-muted-foreground">ABOUT</span>
          </div>

          <h1 className="mb-12 text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            关于我们
          </h1>

          <div className="space-y-8 text-lg leading-relaxed text-foreground">
            <p>
              本站由我个人独立运营，
              专注于 SEO-first 网站结构设计、长期搜索增长以及 AI-ready 信息架构。
            </p>

            <p>
              我主要为制造业与品牌型企业提供网站建设、SEO 顾问及长期运营支持，
              关注的不是短期排名或流量技巧，而是网站是否具备长期、可持续获客的能力。
            </p>

            <p>
              本站所展示的案例、文章与方法论，
              均来源于真实项目实践与持续研究，
              目的是帮助企业理解搜索环境的变化，并做出更理性的长期决策。
            </p>

            <p>
              如果你认同这种以结构和时间为核心的增长方式，
              欢迎进一步沟通合作的可能性。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
