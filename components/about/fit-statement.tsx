import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FitStatement() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground">如果你正在寻找一个长期合作伙伴</h2>

          <p className="mb-8 text-lg leading-loose text-muted-foreground">
            而不只是一个建站服务商或SEO外包，我们可能会合作得很好。
            我最擅长的是帮你理清思路、建立系统，然后一起看着它产生复利效应。
          </p>

          <div className="mb-12 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
            <p className="text-lg leading-relaxed text-foreground">
              "好的SEO不是让搜索引擎喜欢你的网站，
              <br className="hidden md:block" />
              而是让搜索引擎<span className="font-semibold text-primary">理解</span>你的网站。"
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 rounded-lg">
              <Link href="/#contact">
                聊聊你的项目
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-lg bg-transparent">
              <Link href="/services">查看服务方案</Link>
            </Button>
          </div>

          {/* Subtle closing note */}
          <p className="mt-12 text-sm text-muted-foreground">
            初次沟通不收费，也没有任何推销压力。
            <br />
            如果不合适，我会直接告诉你，并尽可能给出其他建议。
          </p>
        </div>
      </div>
    </section>
  )
}
