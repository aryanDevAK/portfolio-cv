import { type NextRequest, NextResponse } from "next/server"
import { fallbackData } from "@/lib/data"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    const limit = searchParams.get("limit")

    let blogs = fallbackData.blogs

    // Filter by category if specified
    if (category && category !== "all") {
      blogs = blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase())
    }

    // Filter by featured if specified
    if (featured === "true") {
      blogs = blogs.filter((blog) => blog.featured)
    }

    // Limit results if specified
    if (limit) {
      const limitNum = Number.parseInt(limit, 10)
      if (!isNaN(limitNum) && limitNum > 0) {
        blogs = blogs.slice(0, limitNum)
      }
    }

    // Sort by published date (newest first)
    blogs.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return NextResponse.json({
      success: true,
      data: blogs,
      total: blogs.length,
    })
  } catch (error) {
    console.error("Blogs API error:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}
