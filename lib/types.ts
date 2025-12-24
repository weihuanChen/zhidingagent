export type Locale = "ja" | "en" | "zh" | "es"

export interface FAQItem {
  question: string
  answer: string
}

export interface TagInfo {
  id?: number
  name: string
  slug: string
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  tagDetails?: TagInfo[]
  content: string
  readingTime: number
  locale: Locale
  faq?: FAQItem[]
  viewCount?: number
  uniqueViewCount?: number
  categorySlug?: string
  categoryName?: string
}
