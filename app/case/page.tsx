import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CaseHero } from "@/components/case/case-hero"
import { CaseListSection } from "@/components/case/case-list-section"
import { CaseClosing } from "@/components/case/case-closing"
import type { Case, CaseType } from "@/components/case/case-card"
import type { CaseCategoryItem } from "@/components/case/case-categories"
import { caseList } from "@/lib/case-data"
import type { BlogPost } from "@/lib/types"
import { getPostsByCategoryFromCMS, getTagsByIdsFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"

export const revalidate = 3600

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

export async function generateMetadata(): Promise<Metadata> {
  const { getPostsByCategoryFromCMS } = await import("@/lib/cms-blog")
  const { SITE_ID } = await import("@/lib/directus")
  const casePosts = await getPostsByCategoryFromCMS("case", "zh", SITE_ID)
  const publishedCount = casePosts.length

  // case 分类下已发布文章数 <=3 时设置 noindex
  const shouldNoIndex = publishedCount <= 3

  return {
    title: "案例研究 | 知定智能 - SEO架构实践案例",
    description:
      "探索真实的SEO架构实践案例：从个人项目到客户案例，了解如何通过信息架构和搜索优化构建长期增长资产。",
    robots: shouldNoIndex ? "noindex,follow" : "index,follow",
    alternates: {
      canonical: `${baseUrl}/case`,
    },
  }
}

const fallbackProblem =
  "本站作为 SEO-first 理念的起点，它的设计是如何做的？我又是如何让搜索引擎理解我的网站？"
const fallbackInsight =
  "如果你正在规划一个网站，并希望它在未来几年持续产生价值，那么从信息架构开始思考，往往是最值得投入的地方。"

const normalizeText = (value?: string) => value?.replace(/\s+/g, " ").trim()

const parseQAFromDescription = (description?: string) => {
  if (!description) return { question: fallbackProblem, answer: fallbackInsight }

  const qMatch = description.match(/\[#q\]:\s*([\s\S]*?)(?=\n\[#a\]:|\n\[|$)/i)
  const aMatch = description.match(/\[#a\]:\s*([\s\S]*)/i)

  const question = normalizeText(qMatch?.[1]) || fallbackProblem
  const answer = normalizeText(aMatch?.[1]) || fallbackInsight

  return { question, answer }
}

const pickCaseType = (tags: string[] = []): CaseType => {
  const lowered = tags.map((tag) => tag.toLowerCase())
  if (lowered.includes("personal")) return "practice"
  if (lowered.includes("customer")) return "client"
  if (lowered.includes("seo-structure")) return "demo"
  if (lowered.includes("practice")) return "practice"
  if (lowered.includes("client")) return "client"
  if (lowered.includes("demo")) return "demo"
  return "practice"
}

const classificationTags = new Set(["personal", "customer", "seo-structure", "case"])

const mapPostToCase = (post: BlogPost): Case => {
  const { question, answer } = parseQAFromDescription(post.description || post.content)
  const tagSlugs =
    post.tagDetails?.map((tag) => tag.slug).filter((slug): slug is string => Boolean(slug)) || []
  const postTags = post.tags || []
  const classificationSet = new Set([...tagSlugs, ...postTags].map((tag) => tag.toLowerCase()))
  const categories: Case["categories"] = []
  if (classificationSet.has("personal")) categories.push("practice")
  if (classificationSet.has("customer")) categories.push("client")
  if (classificationSet.has("seo-structure")) categories.push("demo")
  const type = categories[0] || pickCaseType([...tagSlugs, ...postTags])
  const mappedTags = postTags.filter((tag) => !classificationTags.has(tag.toLowerCase()))

  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    type,
    categories: categories.length ? categories : [type],
    industry: post.categoryName || "案例",
    problem: question,
    insight: answer,
    tags: mappedTags,
  }
}

const fetchCaseList = async (): Promise<Case[]> => {
  try {
    const posts = await getPostsByCategoryFromCMS("case", "zh", SITE_ID)
    const mapped = posts.map(mapPostToCase).filter((item) => Boolean(item.slug))
    if (mapped.length) return mapped
  } catch (error) {
    console.error("[case-page] Failed to fetch cases from CMS", error)
  }

  return caseList.map((item) => ({
    ...item,
    categories: [item.type],
  }))
}

export default async function CasePage() {
  const cases = await fetchCaseList()
  const categoryTags = await getTagsByIdsFromCMS([143, 144, 145], "zh")

  const findLabel = (slug: string, fallback: string) =>
    categoryTags.find((tag) => tag.slug === slug)?.name || fallback

  const categories: CaseCategoryItem[] = [
    { id: "all", label: "全部案例" },
    { id: "practice", label: findLabel("personal", "个人实践项目") },
    { id: "client", label: findLabel("customer", "匿名客户项目") },
    { id: "demo", label: findLabel("seo-structure", "SEO 结构演示") },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <CaseHero />
        <CaseListSection cases={cases} categories={categories} />
        <CaseClosing />
      </main>
      <Footer />
    </>
  )
}
