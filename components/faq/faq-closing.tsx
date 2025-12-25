import Link from "next/link"

export function FaqClosing() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-lg border border-border bg-card p-8 md:p-12">
          <h2 className="mb-6 text-2xl font-semibold text-foreground">还有问题？</h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              这个FAQ页面存在的目的是确保我们在开始合作之前，对工作方式、责任边界和长期目标有共同的理解。
            </p>
            <p>
              如果你阅读完这些问题后，发现我的方法和理念与你的期望相符，欢迎通过{" "}
              <Link href="/contact" className="text-primary underline transition-colors hover:text-primary/80">
                联系页面
              </Link>{" "}
              与我沟通。我会仔细阅读每一条消息，并尽快回复。
            </p>
            <p className="pt-4 text-base">
              如果你对某些回答有疑问，或者需要更详细的解释，也可以在联系时提出。我倾向于在开始项目前进行充分的沟通，确保双方对合作有清晰的预期。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

