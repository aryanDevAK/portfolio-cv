import { type NextRequest, NextResponse } from "next/server"
import { fallbackData } from "@/lib/data"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    const { slug } = params

    if (!slug) {
      return NextResponse.json({ error: "Blog slug is required" }, { status: 400 })
    }

    const blog = fallbackData.blogs.find((blog) => blog.slug === slug)

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      data: blog,
    })
  } catch (error) {
    console.error("Blog API error:", error)
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 })
  }
}
