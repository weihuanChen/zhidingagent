
import { Badge } from "@/components/ui/badge"

export function CollaborationHero() {
    return (
        <section className="mx-auto max-w-3xl px-6 pt-24 pb-12 text-left md:pt-32">
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
                合作咨询
            </Badge>
            <h1 className="mb-8 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                构建长期增长资产
            </h1>
            <div className="space-y-6 text-lg text-muted-foreground md:text-xl leading-relaxed">
                <p>
                    我帮助中国的制造业和品牌客户构建可持续的数字增长系统。
                </p>
                <p>
                    我的方法根植于信息架构和技术精度，而非短期技巧。
                    如果您不同于典型的"快速见效"代理模式，正在寻找一个合作伙伴
                    来构建随时间复利的数字资产，我们可能很合适。
                </p>
            </div>
        </section>
    )
}
