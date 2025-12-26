import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InlineCta() {
  return (
    <div className="my-8 rounded-lg border border-border bg-secondary/30 p-6 md:p-8">
      <p className="mb-6 text-base leading-relaxed text-foreground md:text-lg">
        这些思路并不是抽象概念，
        <br className="hidden sm:inline" />
        我把它们应用在不同实践中，整理成了一系列案例。
      </p>
      <Button asChild size="lg" className="group rounded-lg" variant="outline">
        <Link href="/case">
          查看实践案例
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  )
}

