import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CaseClosing() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          这些案例代表可重复的思考模式
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          每个案例背后的结构思维和系统设计方法都可以应用到其他场景。
          如果你想知道类似的结构如何应用到你的网站，欢迎讨论。
        </p>
        <Button size="lg" className="rounded-lg" asChild>
          <Link href="/contact">开始咨询</Link>
        </Button>
      </div>
    </section>
  )
}

