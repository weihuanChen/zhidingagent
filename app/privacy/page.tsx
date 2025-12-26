import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyHero } from "@/components/privacy/privacy-hero"
import { PrivacyContent } from "@/components/privacy/privacy-content"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "隐私政策 | 知定智能 - SEO架构顾问",
  description:
    "本站尊重并重视你的隐私。了解我们如何收集、使用和保护你的个人信息。",
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <PrivacyHero />
        <PrivacyContent />
      </main>
      <Footer />
    </>
  )
}

