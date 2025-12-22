import Link from "next/link"
import NextImage from "next/image"

const footerLinks = {
  services: {
    title: "服务",
    links: [
      { label: "SEO优化", href: "/services/seo" },
      { label: "网站建设", href: "/services/web-development" },
      { label: "信息架构", href: "/services/information-architecture" },
      { label: "内容策略", href: "/services/content-strategy" },
    ],
  },
  resources: {
    title: "资源",
    links: [
      { label: "知识库", href: "/blog" },
      { label: "案例研究", href: "/cases" },
      { label: "SEO检测工具", href: "/tools" },
      { label: "常见问题", href: "/faq" },
    ],
  },
  company: {
    title: "关于",
    links: [
      { label: "关于我们", href: "/about" },
      { label: "联系方式", href: "#contact" },
      { label: "隐私政策", href: "/privacy" },
      { label: "服务条款", href: "/terms" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <NextImage
                src="/logo.png"
                alt="知定智能 Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-lg"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">知定智能</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              专注于为中国制造业和品牌企业提供SEO优先的网站建设服务。
            </p>

            <div className="mt-6 rounded-lg border border-border bg-card p-3">
              <p className="text-xs italic text-muted-foreground">"我们不构建一次性网站，我们构建长期流量系统。"</p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">Next.js</span>
              <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono text-muted-foreground">SEO-first</span>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} 知定智能. 保留所有权利.</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-1 w-1 rounded-full bg-primary" />
            <span>使用 Next.js 构建 · 部署于 Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
