import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export type CaseType = "practice" | "client" | "demo"

export interface Case {
  id: string
  slug: string
  title: string
  type: CaseType
  categories: CaseType[]
  industry: string
  problem: string
  insight: string
  tags?: string[]
}

const typeLabels: Record<CaseType, string> = {
  practice: "实践项目",
  client: "客户项目",
  demo: "结构演示",
}

const typeColors: Record<CaseType, string> = {
  practice: "bg-primary/10 text-primary border-primary/20",
  client: "bg-secondary text-secondary-foreground border-border",
  demo: "bg-accent/10 text-accent-foreground border-accent/20",
}

interface CaseCardProps {
  case: Case
}

export function CaseCard({ case: caseItem }: CaseCardProps) {
  const uniqueTags = Array.from(new Set(caseItem.tags ?? []))
  const insightParts = (() => {
    const text = caseItem.insight || ""
    const match = text.match(/(.+?[，,。.!？?])/)
    if (!match) return [text]
    const first = match[1]
    const second = text.slice(first.length).trim()
    return second ? [first, second] : [first]
  })()

  return (
    <Link
      href={`/case/${caseItem.slug}`}
      className="group block rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-sm"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className={`rounded-md text-xs ${typeColors[caseItem.type]}`}
            >
              {typeLabels[caseItem.type]}
            </Badge>
            <Badge variant="secondary" className="rounded-md text-xs">
              {caseItem.industry}
            </Badge>
            {uniqueTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="mb-2 text-xl font-semibold leading-tight text-foreground transition-colors group-hover:text-primary line-clamp-2 break-words">
            {caseItem.title}
          </h3>

          <div className="space-y-4 border-t border-border pt-4">
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                核心问题
              </p>
              <p className="text-sm leading-relaxed text-foreground line-clamp-3 break-words">
                {caseItem.problem}
              </p>
            </div>
            <div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                关键洞察
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line line-clamp-3 break-words">
                {insightParts[0]}
                {insightParts[1] ? `\n${insightParts[1]}` : ""}
              </p>
            </div>
          </div>
        </div>

        <ArrowRight className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </div>
    </Link>
  )
}
