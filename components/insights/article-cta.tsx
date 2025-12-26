import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ArticleCta() {
  return (
    <div className="mt-12 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
      <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
        如果你正在考虑做网站或重构现有结构，
        <br className="hidden sm:inline" />
        可以先了解我通常是如何分阶段参与这类项目的。
      </p>
      <Button asChild size="lg" className="group rounded-lg">
        <Link href="/services">
          查看服务方案
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}

