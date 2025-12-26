
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CollaborationHero } from "@/components/contact/collaboration-hero"
import { CollaborationFit } from "@/components/contact/collaboration-fit"
import { CollaborationForm } from "@/components/contact/collaboration-form"
import { CollaborationClosing } from "@/components/contact/collaboration-closing"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export const metadata: Metadata = {
    title: "合作咨询 | 知定智能 - 构建长期增长资产",
    description: "申请与知定智能建立战略合作伙伴关系。我们专注于为制造业和品牌客户构建 SEO 驱动的增长系统。",
    keywords: "SEO 咨询, 数字增长合作, 制造业 SEO, 品牌策略 中国",
    alternates: {
        canonical: `${baseUrl}/contact`,
    },
}

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pb-20">
                <CollaborationHero />
                <CollaborationFit />
                <CollaborationForm />
                <CollaborationClosing />
            </main>
            <Footer />
        </>
    )
}
