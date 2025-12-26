import { ArrowRight, Mail, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCta() {
  return (
    <section id="contact" className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-primary">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative grid gap-10 p-10 md:grid-cols-2 md:p-14 lg:p-20">
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-primary-foreground/30" />
                <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70">
                  聊聊你的项目
                </span>
              </div>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                准备好让更多客户找到你了吗？
              </h2>
              <p className="mt-6 text-pretty text-lg leading-loose text-primary-foreground/80">
                不确定从哪里开始？没关系。告诉我们你的业务和目标，我们帮你做一个免费的网站诊断，看看有哪些增长机会。
              </p>

              <div className="mt-8 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 p-5">
                <p className="leading-relaxed text-primary-foreground/90">
                  "我们相信好的企业网站不应该只是一张名片，而是能持续带来客户的资产。如果你也这么想，我们应该聊聊。"
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="group rounded-lg">
                  预约免费咨询
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  下载服务手册
                </Button>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col justify-center gap-8 rounded-xl bg-primary-foreground/10 p-8 md:p-10">
              <h3 className="text-lg font-semibold text-primary-foreground">联系方式</h3>

              <div className="space-y-5">
                <ContactItem icon={Mail} label="邮箱" value="contact@zhidingagent.com" href="mailto:contact@zhidingagent.com" />
                {/* <ContactItem icon={Phone} label="电话" value="+86 021-6789-0123" href="tel:+862167890123" /> */}
                <ContactItem icon={MessageSquare} label="微信" value="zhidingagent_com" />
              </div>

              <div className="mt-2 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <p className="text-sm text-primary-foreground/70">工作日 9:00-18:00 · 通常24小时内回复</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10">
        <Icon className="h-5 w-5 text-primary-foreground" />
      </div>
      <div>
        <div className="text-xs text-primary-foreground/60">{label}</div>
        <div className="font-medium text-primary-foreground">{value}</div>
      </div>
    </div>
  )

  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    )
  }

  return content
}
