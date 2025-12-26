import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "知定智能 | SEO优先网站建设 - 面向制造业与品牌客户",
  description: "为中国制造业和品牌企业提供SEO优先的网站建设服务。专注信息架构、搜索引擎优化、高性能网站开发。",
  keywords: ["SEO", "网站建设", "制造业", "品牌", "Next.js", "信息架构"],
  authors: [{ name: "知定智能" }],
  openGraph: {
    title: "知定智能 | SEO优先网站建设",
    description: "为中国制造业和品牌企业提供SEO优先的网站建设服务",
    type: "website",
    locale: "zh_CN",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  )
}
