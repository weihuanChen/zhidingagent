import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export type CaseType = "practice" | "client" | "demo"

export interface Case {
  id: string
  slug: string
  title: string
  type: CaseType
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
  return (
    <Link
      href={`/case/${caseItem.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="mb-3 flex items-center gap-2">
            <Badge
              variant="outline"
              className={`rounded-md text-xs ${typeColors[caseItem.type]}`}
            >
              {typeLabels[caseItem.type]}
            </Badge>
            {caseItem.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-md text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {caseItem.title}
          </h3>
          <p className="text-sm text-muted-foreground">{caseItem.industry}</p>
        </div>
        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
      </div>

      <div className="space-y-3 border-t border-border pt-4">
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            核心问题
          </p>
          <p className="text-sm leading-relaxed text-foreground">{caseItem.problem}</p>
        </div>
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            关键洞察
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{caseItem.insight}</p>
        </div>
      </div>
    </Link>
  )
}

