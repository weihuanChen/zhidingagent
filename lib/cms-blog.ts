import { readItems } from "@directus/sdk"
import { unstable_noStore as noStore } from "next/cache"
import { directus, SITE_ID, type DirectusPost, type PostTranslation, type Tag } from "./directus"
import type { BlogPost, Locale, TagInfo } from "./types"

const postFields: Array<
  "*" | keyof DirectusPost | { category_id?: string[]; post_tags?: string[] }
> = [
  "id",
  "slug",
  "title",
  "description",
  "content",
  "published_at",
  "site_id",
  "language",
  "tags",
  { post_tags: ["tags_id.slug", "tags_id.name", "tags_id.id"] },
  { category_id: ["slug", "name", "site_id"] },
  "view_count",
  "unique_view_count",
]

const translationFields = ["post_id", "language_code", "title", "description", "content", "tags"]

const defaultAuthor = "Zhiding Agent Team"
const wordsPerMinute = 200

const computeReadingTime = (text: string) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

const normalizeCategory = (category?: DirectusPost["category_id"]) => {
  if (!category) return undefined
  if (typeof category === "number") {
    return { id: category }
  }
  return {
    id: category.id,
    slug: category.slug,
    name: category.name,
    site_id: category.site_id,
  }
}

const extractTags = (post: DirectusPost): { tags: string[]; tagDetails: TagInfo[] } => {
  const tagDetails: TagInfo[] = []

  if (Array.isArray(post.post_tags)) {
    post.post_tags.forEach((tagRelation) => {
      if (!tagRelation || typeof tagRelation === "number") return
      const data = tagRelation.tags_id
      if (!data || typeof data === "number") return
      const slug = data.slug || data.name
      const name = data.name || data.slug
      const id = data.id
      if (slug) {
        tagDetails.push({ slug, name: name || slug, id })
      }
    })
  }

  if (Array.isArray(post.tags)) {
    post.tags.forEach((tag) => {
      if (!tagDetails.find((item) => item.slug === tag)) {
        tagDetails.push({ slug: tag, name: tag })
      }
    })
  }

  const tags = tagDetails.map((item) => item.slug)
  return { tags, tagDetails }
}

const mapPostToBlogPost = (
  post: DirectusPost,
  translation: PostTranslation | undefined,
  locale: Locale
): BlogPost => {
  const baseTitle = translation?.title || post.title || ""
  const baseDescription = translation?.description || post.description || ""
  const baseContent = translation?.content || post.content || ""
  const { tags, tagDetails } = extractTags(post)
  const category = normalizeCategory(post.category_id)

  return {
    slug: post.slug,
    title: baseTitle,
    description: baseDescription,
    content: baseContent,
    date: post.published_at || post.date_created || "",
    author: defaultAuthor,
    tags,
    tagDetails,
    readingTime: computeReadingTime(baseContent || baseDescription),
    locale,
    categorySlug: category?.slug,
    categoryName: category?.name,
    viewCount: post.view_count,
    uniqueViewCount: post.unique_view_count,
  }
}

const fetchTranslations = async (postIds: string[], locale: Locale) => {
  if (!postIds.length) {
    return new Map<string, PostTranslation>()
  }

  const supported: PostTranslation["language_code"][] = ["en", "zh", "es"]
  if (!supported.includes(locale as PostTranslation["language_code"])) {
    return new Map<string, PostTranslation>()
  }
  const translationLocale = locale as PostTranslation["language_code"]

  const translations = await directus.request(
    readItems("post_translation", {
      fields: translationFields,
      filter: {
        post_id: { _in: postIds },
        language_code: { _eq: translationLocale },
      },
    })
  )

  return new Map(translations.map((item) => [item.post_id, item]))
}

const buildPostFilter = (siteId: number, categorySlug?: string) => {
  const filter: Record<string, unknown> = {
    status: { _eq: "published" },
  }

  if (siteId) {
    filter.site_id = { _eq: siteId }
  }

  if (categorySlug) {
    filter.category_id = { slug: { _eq: categorySlug } }
  }

  return filter
}

const getPostsFromCMS = async (
  locale: Locale,
  siteId: number,
  categorySlug?: string
): Promise<BlogPost[]> => {
  noStore()
  const posts = await directus.request(
    readItems("posts", {
      fields: postFields,
      filter: buildPostFilter(siteId, categorySlug),
      sort: ["-published_at", "-date_created"],
    })
  )

  if (!posts.length) return []

  const translationMap = await fetchTranslations(
    posts.map((post) => post.id),
    locale
  )

  return posts.map((post) =>
    mapPostToBlogPost(post, translationMap.get(post.id) as PostTranslation | undefined, locale)
  )
}

const collectTagIds = (post: DirectusPost): number[] => {
  const ids = new Set<number>()
  post.post_tags?.forEach((relation) => {
    if (relation && typeof relation !== "number" && relation.tags_id && typeof relation.tags_id !== "number") {
      const id = relation.tags_id.id
      if (typeof id === "number") ids.add(id)
    }
  })
  return Array.from(ids)
}

const applyTagTranslations = (tagDetails: TagInfo[] = [], translatedTags: Tag[]) => {
  if (!translatedTags.length) return tagDetails
  const byId = new Map<number, Tag>()
  const bySlug = new Map<string, Tag>()

  translatedTags.forEach((tag) => {
    byId.set(tag.id, tag)
    if (tag.slug) bySlug.set(tag.slug, tag)
  })

  return tagDetails.map((tag) => {
    const translated =
      (tag.id ? byId.get(tag.id) : undefined) ||
      (tag.slug ? bySlug.get(tag.slug) : undefined)
    if (!translated) return tag
    return { ...tag, name: translated.name || tag.name }
  })
}

export const getAllPostsFromCMS = async (
  locale: Locale = "zh",
  siteId: number = SITE_ID
) => getPostsFromCMS(locale, siteId)

export const getPostsByCategoryFromCMS = async (
  categorySlug: string,
  locale: Locale = "zh",
  siteId: number = SITE_ID
) => getPostsFromCMS(locale, siteId, categorySlug)

export const getPostBySlugFromCMS = async (
  slug: string,
  locale: Locale = "zh",
  siteId: number = SITE_ID,
  categorySlug?: string
): Promise<BlogPost | null> => {
  noStore()
  const posts = await directus.request(
    readItems("posts", {
      fields: postFields,
      filter: {
        slug: { _eq: slug },
        ...buildPostFilter(siteId, categorySlug),
      },
      limit: 1,
    })
  )

  const post = posts?.[0]
  if (!post) return null

  const translations = await fetchTranslations([post.id], locale)
  const mapped = mapPostToBlogPost(post, translations.get(post.id) as PostTranslation | undefined, locale)
  const tagIds = collectTagIds(post)
  const translatedTags = tagIds.length ? await getTagsByIdsFromCMS(tagIds, locale) : []
  const tagDetails = applyTagTranslations(mapped.tagDetails, translatedTags)

  return { ...mapped, tagDetails }
}

export const getCategoriesForSite = async (siteId: number = SITE_ID) =>
  directus.request(
    readItems("category", {
      fields: ["id", "slug", "name", "site_id"],
      filter: siteId ? { site_id: { _eq: siteId } } : undefined,
    })
  )

export const getTagsByIdsFromCMS = async (ids: number[], locale: Locale = "zh"): Promise<Tag[]> => {
  noStore()
  if (!ids.length) return []

  const [tags, translations] = await Promise.all([
    directus.request(
      readItems("tags", {
        filter: { id: { _in: ids } },
        fields: ["id", "name", "slug"],
      })
    ),
    directus.request(
      readItems("tags_translation", {
        filter: { tag_id: { _in: ids }, language_code: { _eq: locale } },
        fields: ["tag_id", "language_code", "translated_name"],
      })
    ),
  ])

  const translationMap = new Map<number, string>()
  translations.forEach((t) => {
    if (typeof t.tag_id === "number") {
      translationMap.set(t.tag_id, t.translated_name)
    }
  })

  return tags.map((tag) => ({
    ...tag,
    name: translationMap.get(tag.id) || tag.name,
    translations: translations as Tag["translations"],
  }))
}
