"use client"

import { useState, useEffect } from "react"
import { GlassPanel } from "@/components/glass-panel"
import { fetchBlogs } from "@/lib/data"
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  XMarkIcon,
  ArrowLongRightIcon,
  BookOpenIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline"
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

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory)
  const featuredBlogs = blogs.filter((blog) => blog.featured)

  return (
    <section className="min-h-screen p-6 lg:p-8 my-20 relative">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <FadeIn>
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full"
                style={{
                  color: "var(--theme-accent)",
                  backgroundColor: "var(--theme-glass)",
                  border: "1px solid var(--theme-panel-border)",
                }}
              >
                <BookOpenIcon className="w-4 h-4" />
                Knowledge Hub
              </span>
            </motion.div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance"
              style={{ color: "var(--theme-foreground)" }}
            >
              Blog & Articles
            </h2>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "var(--theme-muted)" }}
            >
              Insights on AI, web development, and my journey in tech
            </p>
          </div>
        </FadeIn>

        {/* ── Featured Blogs Hero ── */}
        {featuredBlogs.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-6">
                <motion.div
                  animate={{ rotate: [0, 15, -10, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <SparklesIcon className="w-5 h-5" style={{ color: "var(--theme-accent)" }} />
                </motion.div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--theme-foreground)" }}
                >
                  Featured Articles
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredBlogs.slice(0, 2).map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="cursor-pointer group"
                    onClick={() => setSelectedBlog(blog)}
                  >
                    <motion.div
                      whileHover={{ y: -6 }}
                      transition={{ duration: 0.25 }}
                    >
                      <GlassPanel className="h-full overflow-hidden" hover>
                        {/* Image with overlay */}
                        <div className="relative overflow-hidden rounded-xl mb-4">
                          <motion.img
                            src={blog.image || "/placeholder.svg"}
                            alt={blog.title}
                            className="w-full h-52 object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background: "linear-gradient(to top, var(--theme-panel) 0%, transparent 60%)",
                            }}
                          />
                          <div
                            className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md"
                            style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                          >
                            <SparklesIcon className="w-3 h-3" />
                            FEATURED
                          </div>
                        </div>

                        {/* Content */}
                        <div
                          className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            color: "var(--theme-accent)",
                            border: "1px solid var(--theme-panel-border)",
                          }}
                        >
                          {blog.category}
                        </div>
                        <h3
                          className="text-xl font-bold mb-2 line-clamp-2"
                          style={{ color: "var(--theme-foreground)" }}
                        >
                          {blog.title}
                        </h3>
                        <p
                          className="text-sm mb-4 line-clamp-2"
                          style={{ color: "var(--theme-muted)" }}
                        >
                          {blog.excerpt}
                        </p>
                        <div
                          className="flex items-center justify-between text-xs"
                          style={{ color: "var(--theme-muted)" }}
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-3.5 h-3.5" />
                              {new Date(blog.publishedAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ClockIcon className="w-3.5 h-3.5" />
                              {blog.readTime}
                            </div>
                          </div>
                          <motion.div
                            className="flex items-center gap-1 font-semibold"
                            style={{ color: "var(--theme-accent)" }}
                            whileHover={{ x: 4 }}
                          >
                            Read Article
                            <ArrowLongRightIcon className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </GlassPanel>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* ── Category Filter ── */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border"
                style={
                  selectedCategory === category
                    ? {
                      backgroundColor: "var(--theme-accent)",
                      color: "white",
                      borderColor: "var(--theme-accent)",
                    }
                    : {
                      backgroundColor: "var(--theme-glass)",
                      color: "var(--theme-foreground)",
                      borderColor: "var(--theme-panel-border)",
                    }
                }
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === "all" ? "All Articles" : category}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        {/* ── Blog Grid ── */}
        {loading ? (
          <div className="text-center py-16">
            <motion.div
              className="rounded-full h-12 w-12 border-2 mx-auto mb-4"
              style={{ borderColor: "var(--theme-panel-border)", borderTopColor: "var(--theme-accent)" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p style={{ color: "var(--theme-muted)" }}>Loading articles...</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <GlassPanel className="h-full overflow-hidden flex flex-col" hover>
                      {/* Image with zoom */}
                      <div className="relative overflow-hidden rounded-xl mb-4">
                        <motion.img
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-full h-44 object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        />
                        {blog.featured && (
                          <div
                            className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md"
                            style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                          >
                            Featured
                          </div>
                        )}
                        {/* Category on image */}
                        <div
                          className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-md"
                          style={{
                            backgroundColor: "var(--theme-glass)",
                            color: "var(--theme-foreground)",
                            border: "1px solid var(--theme-panel-border)",
                          }}
                        >
                          {blog.category}
                        </div>
                      </div>

                      {/* Content */}
                      <h3
                        className="text-lg font-bold mb-1.5 line-clamp-2"
                        style={{ color: "var(--theme-foreground)" }}
                      >
                        {blog.title}
                      </h3>
                      <p
                        className="text-sm mb-1 line-clamp-2"
                        style={{ color: "var(--theme-muted)" }}
                      >
                        {blog.excerpt}
                      </p>
                      <button
                        className="text-xs font-medium mb-4 cursor-pointer w-fit"
                        style={{ color: "var(--theme-accent)" }}
                      >
                        ...Read more
                      </button>

                      {/* Footer */}
                      <div
                        className="flex items-center justify-between text-xs mt-auto pt-3"
                        style={{
                          color: "var(--theme-muted)",
                          borderTop: "1px solid var(--theme-panel-border)",
                        }}
                      >
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
                        <motion.div
                          className="flex items-center gap-1 font-semibold"
                          style={{ color: "var(--theme-accent)" }}
                          whileHover={{ x: 4 }}
                        >
                          Read
                          <ArrowLongRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </motion.div>
                      </div>
                    </GlassPanel>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {filteredBlogs.length === 0 && !loading && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpenIcon
              className="w-12 h-12 mx-auto mb-4"
              style={{ color: "var(--theme-muted)" }}
            />
            <p className="text-lg" style={{ color: "var(--theme-muted)" }}>
              No articles found in this category.
            </p>
          </motion.div>
        )}
      </div>

      {/* ── Blog Detail Modal ── */}
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
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedBlog(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-4xl"
            >
              <GlassPanel className="max-h-[90vh] overflow-y-auto p-6 lg:p-10 shadow-2xl blog-scroll">
                {/* Close */}
                <motion.button
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-4 right-4 p-2 rounded-full cursor-pointer"
                  style={{ color: "var(--theme-muted)" }}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "var(--theme-glass)",
                  }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.button>

                {/* Hero image */}
                <div className="relative rounded-2xl overflow-hidden mb-6">
                  <img
                    src={selectedBlog.image || "/placeholder.svg"}
                    alt={selectedBlog.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, var(--theme-panel) 0%, transparent 50%)",
                    }}
                  />
                  <div
                    className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md"
                    style={{ backgroundColor: "var(--theme-accent)", color: "white" }}
                  >
                    {selectedBlog.category}
                  </div>
                </div>

                {/* Meta */}
                <div
                  className="flex items-center gap-4 mb-4 text-sm"
                  style={{ color: "var(--theme-muted)" }}
                >
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="w-4 h-4" />
                    {new Date(selectedBlog.publishedAt).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {selectedBlog.readTime}
                  </div>
                </div>

                {/* Title */}
                <h1
                  className="text-3xl lg:text-4xl font-bold mb-4"
                  style={{ color: "var(--theme-foreground)" }}
                >
                  {selectedBlog.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
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

                {/* Content */}
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
