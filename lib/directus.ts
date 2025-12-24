import { createDirectus, rest, staticToken } from "@directus/sdk"

export interface Tag {
  id: number
  name: string
  slug: string
  translations?: TagTranslation[]
  tags_translation?: TagTranslation[]
}

export interface TagTranslation {
  id: number
  tag_id: number
  language_code: "en" | "ja" | "zh" | "es"
  translated_name: string
}

export interface DirectusCategory {
  id?: number
  name?: string
  slug?: string
  site_id?: number
}

export interface DirectusPost {
  id: string
  slug: string
  title?: string
  description?: string
  content?: string
  published_at?: string
  site_id?: number
  status?: "draft" | "published" | "archived"
  post_tags?: Array<{ tags_id?: number | Tag }>
  post_recommend?: string[]
  image?: string
  date_created?: string
  date_updated?: string
  view_count?: number
  unique_view_count?: number
  last_viewed_at?: string
  language?: string | null
  tags?: string[] | null
  category_id?: number | DirectusCategory
}

export interface PostTranslation {
  id: number
  post_id: string
  language_code: "en" | "zh" | "es"
  title: string
  description: string
  content: string
  tags?: string[]
  date_created?: string
  date_updated?: string
}

export interface Site {
  id: number
  site_name: string
  domain: string
  date_created?: string
  date_updated?: string
}

export interface DirectusSchema {
  posts: DirectusPost[]
  post_translation: PostTranslation[]
  sites: Site[]
  tags: Tag[]
  tags_translation: TagTranslation[]
  category: DirectusCategory[]
}

const directusUrl = process.env.DIRECTUS_URL || "https://directus.lzyinglian.com/"
const directusToken = process.env.DIRECTUS_TOKEN || ""

export const directus = createDirectus<DirectusSchema>(directusUrl)
  .with(staticToken(directusToken))
  .with(rest())

export const SITE_ID = parseInt(process.env.NEXT_PUBLIC_SITE_ID || "0", 10) || 0
