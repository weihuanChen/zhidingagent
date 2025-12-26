import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsHero } from "@/components/terms/terms-hero"
import { TermsContent } from "@/components/terms/terms-content"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
  title: "服务条款 | 知定智能 - SEO架构顾问",
  description:
    "在使用本站或与我进行合作沟通前，请你了解服务性质、合作边界、知识产权等相关条款。",
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <TermsHero />
        <TermsContent />
      </main>
      <Footer />
    </>
  )
}

