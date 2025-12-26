import type { MetadataRoute } from "next"
import { getPostsByCategoryFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zhidingagent.com"

// 静态页面列表
const staticPages = [
  "",
  "/about",
  "/services",
  "/contact",
  "/faq",
  "/tools",
  "/ai-ready",
  "/privacy",
  "/terms",
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapEntries: MetadataRoute.Sitemap = []

  // 添加静态页面
  staticPages.forEach((path) => {
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "daily" : "monthly",
      priority: path === "" ? 1 : 0.8,
    })
  })

  // 获取所有已发布的文章
  const insightsPosts = await getPostsByCategoryFromCMS("insights", "zh", SITE_ID)
  const casePosts = await getPostsByCategoryFromCMS("case", "zh", SITE_ID)

  // /insights 列表页：仅当该分类下文章数 > 3 时才加入 sitemap
  if (insightsPosts.length > 3) {
    sitemapEntries.push({
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  }

  // /case 列表页：仅当该分类下文章数 > 3 时才加入 sitemap
  if (casePosts.length > 3) {
    sitemapEntries.push({
      url: `${baseUrl}/case`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })
  }

  // 添加所有已发布的 insights 文章详情（只要 published、非草稿、canonical明确就收录）
  insightsPosts.forEach((post) => {
    if (post.slug && post.date) {
      sitemapEntries.push({
        url: `${baseUrl}/insights/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  })

  // 添加所有已发布的 case 文章详情（只要 published、非草稿、canonical明确就收录）
  casePosts.forEach((post) => {
    if (post.slug && post.date) {
      sitemapEntries.push({
        url: `${baseUrl}/case/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  })

  return sitemapEntries
}

