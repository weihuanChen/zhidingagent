# Case 列表查询与映射说明

## 数据来源
- CMS：Directus `posts` 表，按分类 slug `case` 查询（`getPostsByCategoryFromCMS("case", "zh", SITE_ID)`）。
- 分类标签：从 `post_tags.tags_id.slug` 读取。当前约定：
  - `personal` → 个人实践项目（practice）
  - `customer` → 匿名客户项目（client）
  - `seo-structure` → SEO 结构演示（demo）
- 展示标签：仅使用 `posts.tags` 字段，作为静态文案标签（例：`["内容系统","实践项目","结构化思维"]`），不会参与过滤。

## 字段映射
- 分类数组 `categories`：从 `post_tags`/`posts.tags` 中提取 `personal/customer/seo-structure`，可多分类；用于筛选与计数（仅包含具体分类，不含 all）。
- 类型 `type`：优先取分类数组首项；若为空则退回通过标签推断（`CaseType`）。
- 标题/行业：`title` / `categoryName`（缺省为“案例”）。
- 核心问题/关键洞察：从 `description`（或 `content`）解析 `[#q]: ...` / `[#a]: ...`，缺省回退为预置文案。
- 展示标签：`posts.tags` 去掉分类标签集 `{personal, customer, seo-structure, case}`。

## 界面逻辑
- 页面：`app/case/page.tsx`
  - 服务器端取数 → 映射成 `Case` 对象 → 传给客户端列表组件。
  - 分类文案：通过 `getTagsByIdsFromCMS([143,144,145])` 取 name（personal/customer/seo-structure）。
  - Fallback：CMS 无数据时退回静态 `lib/case-data`，并补充 `categories: [type]`。
- 列表组件：`components/case/case-list-section.tsx`
  - 分类计数/筛选基于 `categories` 数组，可多重命中。
- 卡片组件：`components/case/case-card.tsx`
  - 文本过长处理：`line-clamp` + `break-words`，关键洞察按首个标点换行。

## API
- `app/api/case/route.ts`：GET 返回 `{ count, record }`，分类固定为 `case`，主要用于调试。
