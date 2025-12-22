import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AiReadyClosing() {
  return (
    <section className="border-b border-border bg-secondary/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-[60px] bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary">准备，而非追逐</span>
            <div className="h-px w-[60px] bg-primary" />
          </div>
          <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            准备，而非追逐
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-card p-8">
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                AI就绪不是关于追逐最新的AI趋势，而是关于为搜索环境的根本性变化做好准备。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">准备，而非追逐</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      AI就绪架构是关于建立能够适应未来搜索环境的结构，而不是追逐每一个新出现的AI工具或平台。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">今天建立的结构定义明天的可见性</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      你今天建立的网站结构、信息架构和内容系统，将决定你的网站在未来AI驱动搜索环境中的可见性。这不是短期优化，而是长期投资。
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium text-foreground">前瞻性，而非反应性</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      与其等到AI搜索成为主流后再匆忙应对，不如现在就建立能够适应未来环境的结构基础。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-8">
              <h3 className="mb-4 text-lg font-semibold text-foreground">核心信息</h3>
              <p className="leading-relaxed text-foreground">
                AI就绪架构不是关于AI工具或自动化，而是关于搜索环境的演进和结构准备。它建立在SEO优先架构的基础上，通过结构化内容、语义一致性、清晰的信息架构和机器可读性，确保你的网站在AI驱动的搜索环境中保持可见性。这不是趋势追逐，而是为长期可见性做准备。
              </p>
            </div>

            <div className="flex justify-center pt-8">
              <Button size="lg" className="group rounded-lg" asChild>
                <Link href="/contact">
                  讨论你的网站是否AI就绪
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

