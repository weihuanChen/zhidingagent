
import { Check, X } from "lucide-react"

export function CollaborationFit() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12">
            <div className="grid gap-12 md:grid-cols-2">
                {/* Good Fit */}
                <div className="space-y-8 rounded-2xl bg-primary/5 p-8 md:p-10">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-foreground">理想情况下，您...</h3>
                        <p className="text-muted-foreground">
                            将网站视为战略业务资产，而不仅仅是数字宣传册。
                        </p>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="h-4 w-4" />
                            </div>
                            <span className="text-foreground/90">理解 SEO 需要结构化的长期工作</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="h-4 w-4" />
                            </div>
                            <span className="text-foreground/90">对咨询或年度服务模式持开放态度</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Check className="h-4 w-4" />
                            </div>
                            <span className="text-foreground/90">重视信息质量和技术精度</span>
                        </li>
                    </ul>
                </div>

                {/* Not Good Fit */}
                <div className="space-y-8 rounded-2xl border border-border bg-card p-8 md:p-10">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-muted-foreground">我们可能不太合适，如果...</h3>
                        <p className="text-muted-foreground">
                            您的主要目标是立即获得短期流量激增，而不建立基础。
                        </p>
                    </div>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <X className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">您希望在第 1 个月就保证特定关键词排名</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <X className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">您只需要一次性"交付即忘"的网站交付</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <X className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground">您正在寻找最便宜的选项</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
