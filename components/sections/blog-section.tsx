"use client"

import { useState, useEffect } from "react"
import { GlassPanel } from "@/components/glass-panel"
import { fetchBlogs } from "@/lib/data"
import { CalendarIcon, ClockIcon, TagIcon, XMarkIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline"
import type { Blog } from "@/lib/blogs"
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  motion,
  AnimatePresence,
} from "@/components/motion-wrapper"

export function BlogSection() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  const categories = ["all", "AI/ML", "Full Stack", "Web Development", "Career"]

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const blogData = await fetchBlogs()
        setBlogs(blogData)
      } catch (error) {
        console.error("Failed to load blogs:", error)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  const filteredBlogs = selectedCategory === "all" ? blogs : blogs.filter((blog) => blog.category === selectedCategory)

  const featuredBlogs = blogs.filter((blog) => blog.featured)

  return (
    <section className="min-h-screen p-6 lg:p-8 my-20 relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "var(--theme-foreground)" }}>
              Blog & Articles
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--theme-muted)" }}>
              Insights on AI, web development, and my journey in tech
            </p>
          </div>
        </FadeIn>

        {/* Featured Blogs */}
        {featuredBlogs.length > 0 && (
          <FadeIn delay={0.15}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--theme-foreground)" }}>
                Featured Articles
              </h3>
              <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" stagger={0.1}>
                {featuredBlogs.slice(0, 2).map((blog) => (
                  <StaggerItem key={blog.id}>
                    <div
                      className="cursor-pointer transition-all duration-300 hover:scale-105"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      <GlassPanel className="h-full">
                        <img
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              backgroundColor: "var(--theme-accent)",
                              color: "white",
                            }}
                          >
                            Featured
                          </span>
                          <span
                            className="px-2 py-1 rounded-full text-xs"
                            style={{
                              backgroundColor: "var(--theme-glass)",
                              color: "var(--theme-muted)",
                              border: "1px solid var(--theme-panel-border)",
                            }}
                          >
                            {blog.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2" style={{ color: "var(--theme-foreground)" }}>
                          {blog.title}
                        </h3>
                        <p className="mb-4" style={{ color: "var(--theme-muted)" }}>
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm" style={{ color: "var(--theme-muted)" }}>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              {new Date(blog.publishedAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-4 h-4" />
                              {blog.readTime}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 font-medium" style={{ color: "var(--theme-accent)" }}>
                            Read More
                            <ArrowLongRightIcon className="w-3 h-3" />
                          </div>
                        </div>
                      </GlassPanel>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>
        )}

        {/* Category Filter */}
        <StaggerContainer className="mb-8 flex flex-wrap gap-2 justify-center" stagger={0.05} delay={0.2}>
          {categories.map((category) => (
            <StaggerItem key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 ${selectedCategory === category ? "shadow-md" : ""
                  }`}
                style={{
                  backgroundColor: selectedCategory === category ? "var(--theme-accent)" : "var(--theme-glass)",
                  color: selectedCategory === category ? "white" : "var(--theme-foreground)",
                  border: "1px solid var(--theme-panel-border)",
                }}
              >
                {category === "all" ? "All Articles" : category}
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Blog Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div
              className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4"
              style={{
                borderColor: "var(--theme-accent)",
              }}
            ></div>
            <p style={{ color: "var(--theme-muted)" }}>Loading articles...</p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <GlassPanel className="h-full transition-all duration-300 hover:scale-105">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <div className="flex items-center gap-2 mb-3">
                      {blog.featured && (
                        <span
                          className="px-2 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: "var(--theme-accent)",
                            color: "white",
                          }}
                        >
                          Featured
                        </span>
                      )}
                      <span
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          color: "var(--theme-muted)",
                          border: "1px solid var(--theme-panel-border)",
                        }}
                      >
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--theme-foreground)" }}>
                      {blog.title}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--theme-muted)" }}>
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs" style={{ color: "var(--theme-muted)" }}>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-3 h-3" />
                          {new Date(blog.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {blog.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 font-medium" style={{ color: "var(--theme-accent)" }}>
                        Read More
                        <ArrowLongRightIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredBlogs.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-lg" style={{ color: "var(--theme-muted)" }}>
              No articles found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Blog Popup Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 lg:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedBlog(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-4xl"
            >
              <GlassPanel className="max-h-[90vh] overflow-y-auto p-6 lg:p-10 shadow-2xl">
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                  style={{ color: "var(--theme-foreground)" }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="mb-8">
                  <img
                    src={selectedBlog.image || "/placeholder.svg"}
                    alt={selectedBlog.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl mb-6"
                  />
                  <div className="flex items-center gap-4 mb-4 text-sm" style={{ color: "var(--theme-muted)" }}>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(selectedBlog.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {selectedBlog.readTime}
                    </div>
                    <span
                      className="px-2 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "var(--theme-accent)",
                        color: "white",
                      }}
                    >
                      {selectedBlog.category}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "var(--theme-foreground)" }}>
                    {selectedBlog.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedBlog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm flex items-center gap-1"
                        style={{
                          backgroundColor: "var(--theme-glass)",
                          color: "var(--theme-muted)",
                          border: "1px solid var(--theme-panel-border)",
                        }}
                      >
                        <TagIcon className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="blog-content prose prose-lg max-w-none"
                  style={{ color: "var(--theme-foreground)" }}
                >
                  {selectedBlog.content}
                </div>
              </GlassPanel>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
