import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, Mail } from "lucide-react"

export function ServicesCta() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          聊聊您的增长目标
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          我们不做「先签合同再说」的销售。
          <br />
          每个项目都从理解您的业务开始——您的行业、现状、目标，以及适合的增长路径。
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full gap-2 rounded-lg px-8 sm:w-auto">
            <MessageCircle className="h-5 w-5" />
            预约咨询
          </Button>
          <Button variant="outline" size="lg" className="w-full gap-2 rounded-lg px-8 sm:w-auto bg-transparent">
            <Mail className="h-5 w-5" />
            发送邮件
          </Button>
        </div>

        {/* Contact details */}
        <div className="mt-12 flex flex-col items-center gap-6 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-12">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>通常 1-2 个工作日内回复</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>微信: zhidingagent_com</span>
          </div>
        </div>

        {/* Subtle reassurance */}
        <p className="mt-8 text-sm text-muted-foreground">
          初次沟通不收费，也不会有销售压力。如果我们不是最合适的选择，我们会直接告诉您。
        </p>
      </div>
    </section>
  )
}
