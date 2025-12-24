# Directus Blog Query Notes (zhidingagent.com)

Quick reference of the live query logic now wired into the insights route.

## Environment
- `DIRECTUS_URL`, `DIRECTUS_TOKEN`, `NEXT_PUBLIC_SITE_ID` (current site_id = `9`).

## Collections & Relations
- `category` (site-scoped, m2o): two rows for site 9 → `insights` (id 2), `case` (id 1).
- `posts` → `category_id` (m2o) to filter by channel (insights/case).
- `posts` ↔ `post_tags` ↔ `tags` (m2m); `tags_translation` holds localized names.
- `post_translation` holds non-JP content; not used yet for insights (content in zh).

## Helpers (lib/cms-blog.ts)
- `getPostsByCategoryFromCMS(categorySlug, locale = "zh", siteId = SITE_ID)`  
  - Filters `posts` where `status = published`, `site_id = siteId`, `category_id.slug = categorySlug`.  
  - Expands `post_tags.tags_id.slug/name`, `category_id.slug/name`.  
  - Merges `post_translation` for locale when present.  
  - Returns `BlogPost[]` with `categorySlug`, `categoryName`, `tags`, `tagDetails`.
- `getPostBySlugFromCMS(slug, locale = "zh", siteId = SITE_ID, categorySlug?)`  
  - Fetches single published post by slug, site, and optional category constraint.  
  - Merges translation + tag detail just like the list query; returns `BlogPost | null`.
- `getTagsByIdsFromCMS(ids, locale = "zh")`  
  - Fetches `tags` by id and joins `tags_translation` for the locale; falls back to default name.
- `getCategoriesForSite(siteId)`  
  - Fetches `category` rows for a site.

## Current Insights Wiring
- Route: `app/insights/page.tsx`  
  - `getPostsByCategoryFromCMS("insights")` → fills Featured (latest 4) + All list.  
  - `getTagsByIdsFromCMS([142, 141, 140, 139])` → renders content category cards (static descriptions, non-clickable).
- Route: `app/insights/[slug]/page.tsx`  
  - `getPostBySlugFromCMS(slug, "zh", SITE_ID, "insights")` ensures the slug belongs to the insights channel for site 9.  
  - Renders markdown content with `Streamdown` + `remark-gfm`; shows date, reading time, category badge, and tag chips; includes “返回知识库” link.

## Tag IDs (content categories)
- 142 `ai-ready` → translated: “AI就绪搜索与GEO”
- 141 `seo-brand` → translated: “制造业与品牌SEO”
- 140 `website-architecture` → translated: “网站架构与结构” (currently linked to both posts)
- 139 `seo-fundamentals` → translated: “SEO 基础与策略”

## Sample Queries (Node snippets)

```ts
// Posts in insights category (site 9)
readItems("posts", {
  fields: ["slug", "title", "category_id.slug", "post_tags.tags_id.slug"],
  filter: {
    status: { _eq: "published" },
    site_id: { _eq: 9 },
    category_id: { slug: { _eq: "insights" } },
  },
})

// Tag translations for the four category tags
readItems("tags_translation", {
  fields: ["tag_id", "language_code", "translated_name"],
  filter: { tag_id: { _in: [139, 140, 141, 142] }, language_code: { _eq: "zh" } },
})
```

## Notes
- Featured = latest 4 posts from `getPostsByCategoryFromCMS("insights")` (currently only 1).  
- Category cards are static display only (no links).  
- If tag-to-post uniqueness is required (e.g., tag 140), adjust relations in Directus data.  
- Revalidation for insights page: 3600s.
