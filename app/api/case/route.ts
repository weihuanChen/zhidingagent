import { NextResponse } from "next/server"
import { getPostsByCategoryFromCMS } from "@/lib/cms-blog"
import { SITE_ID } from "@/lib/directus"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const posts = await getPostsByCategoryFromCMS("case", "zh", SITE_ID)
    const record = posts[0] || null

    return NextResponse.json(
      {
        count: posts.length,
        record,
      },
      { status: record ? 200 : 404 }
    )
  } catch (error) {
    console.error("[case-api] Failed to fetch case posts", error)
    return NextResponse.json({ error: "Failed to fetch case posts" }, { status: 500 })
  }
}
