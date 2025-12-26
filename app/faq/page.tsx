import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqList } from "@/components/faq/faq-list"
import { FaqClosing } from "@/components/faq/faq-closing"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "常见问题 | 知定智能 - SEO架构顾问",
  description:
    "关于SEO方法论、服务范围、协作方式与长期期望的常见问题。帮助您理解我们的工作方式，明确角色边界，建立合理的预期。",
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
}

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <FaqHero />
        <FaqList />
        <FaqClosing />
      </main>
      <Footer />
    </>
  )
}

