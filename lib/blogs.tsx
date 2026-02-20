import { ReactNode } from "react"

export interface Blog {
  id: number
  title: string
  excerpt: string
  content: ReactNode
  author: string
  publishedAt: string
  readTime: string
  tags: string[]
  category: string
  featured: boolean
  image: string
  slug: string
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Gap Between Indian Colleges and Corporate Demands: What I Saw as a Student",
    excerpt:
      "As a student in the Indian education system, I clearly saw the gap between what colleges teach and what corporates expect. This blog shares honest observations from my own college journey.",
    content: (
      <>
        <p>
          As a <strong>student in an Indian college</strong>, I entered college with
          a lot of expectations. Like most students, I believed that if I studied
          sincerely, scored good marks, and completed my degree, I would naturally
          be ready for a job.
        </p>

        <p>
          But as semesters passed, internships came closer, and placement season
          arrived, I slowly realized something uncomfortable — there is a{" "}
          <strong>huge disconnect</strong> between what colleges teach and what the
          corporate world actually expects.
        </p>

        <p>
          Most Indian colleges still focus heavily on <em>theoretical learning</em>.
          Classes revolve around textbooks, notes, and presentations that have not
          been updated in years.
        </p>

        <p>
          In labs, we followed predefined steps without understanding why we were
          doing them. The goal was simple — complete the record, get it signed, and
          move on.
        </p>

        <p>
          <strong>What I personally saw during my college life:</strong>
        </p>

        <ul>
          <li>Subjects designed to help pass exams, not build real skills</li>
          <li>Outdated syllabus with little connection to modern industry tools</li>
          <li>Labs treated as a formality rather than a learning opportunity</li>
          <li>Projects copied from seniors or GitHub just to meet deadlines</li>
          <li>Marks and attendance valued more than understanding</li>
        </ul>

        {/* Corporate Expectations */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Corporate interview and teamwork"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          Things became clearer when I started exploring internships, hackathons,
          online coding platforms, and corporate interviews.
        </p>

        <p>
          <strong>What corporates actually demand:</strong>
        </p>

        <ul>
          <li>Strong practical and hands-on skills</li>
          <li>Ability to solve real-world problems logically</li>
          <li>Clear communication and confidence</li>
          <li>Understanding of tools, workflows, and teamwork</li>
          <li>Willingness to learn and adapt quickly</li>
        </ul>

        {/* Self Learning */}
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Self learning programming at night"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          Because of all this, students are forced to rely heavily on{" "}
          <strong>self-learning</strong>. Platforms like YouTube, online courses,
          blogs, documentation, and personal projects become our real teachers.
        </p>

        <p>
          <strong>What colleges really need to change:</strong>
        </p>

        <ul>
          <li>Update syllabus regularly based on industry trends</li>
          <li>Introduce mandatory internships and live projects</li>
          <li>Balance theory with practical implementation</li>
          <li>Teach modern tools, not outdated technologies</li>
          <li>Focus on communication, confidence, and teamwork</li>
          <li>Create an environment where learning matters more than marks</li>
        </ul>

        <p>
          <em>
            If you are a student reading this, remember one thing — don’t depend
            only on college. Keep learning on your own, build things, make mistakes,
            and stay curious.
          </em>
        </p>
      </>
    ),
    author: "Aryan Khatri",
    publishedAt: "2025-01-05",
    readTime: "5 min read",
    tags: ["Education", "India", "Students", "Career", "Corporate Skills"],
    category: "Career",
    featured: true,
    image: "/blog_1.png",
    slug: "gap-between-indian-education-and-corporate-demands",
  },
  {
    id: 2,
    title: "AI Agents in 2026: How Autonomous Systems Are Reshaping Software Development",
    excerpt:
      "From code generation to fully autonomous debugging — AI agents are no longer assistants, they're co-developers. Here's what this shift means for engineers.",
    content: (
      <>
        <p>
          The year 2026 has made one thing undeniably clear:{" "}
          <strong>AI agents</strong> are no longer experimental toys — they are
          production-grade collaborators writing, reviewing, and shipping code
          alongside human engineers every single day.
        </p>

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI neural network visualization"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          What started as autocomplete suggestions in IDEs has evolved into
          multi-step reasoning systems that can <em>plan</em>, <em>execute</em>,
          and <em>verify</em> entire features — from reading a Jira ticket to
          opening a pull request.
        </p>

        <p>
          <strong>Key trends driving the AI agent revolution:</strong>
        </p>

        <ul>
          <li>
            <strong>Agentic coding assistants</strong> — tools like Cursor, GitHub
            Copilot Workspace, and Google's Gemini Code Assist go beyond
            line-completion to multi-file reasoning and refactoring
          </li>
          <li>
            <strong>Autonomous debugging</strong> — agents can now reproduce bugs,
            trace root causes through stack traces, and propose verified fixes
          </li>
          <li>
            <strong>CI/CD integration</strong> — AI agents run as pipeline steps,
            auto-fixing lint errors, failing tests, and even security
            vulnerabilities before code reaches review
          </li>
          <li>
            <strong>Natural-language specifications</strong> — teams are writing
            PRDs in plain English and letting agents scaffold the initial
            implementation
          </li>
        </ul>

        <p>
          <strong>What this means for developers:</strong>
        </p>

        <ul>
          <li>The skill ceiling is shifting from "writing code" to "directing agents and reviewing output"</li>
          <li>System design, architecture thinking, and domain expertise become more valuable than syntax mastery</li>
          <li>Junior roles will evolve — entry-level devs will be expected to manage AI workflows from day one</li>
          <li>Testing and verification skills are now critical, as AI-generated code needs rigorous validation</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="Developer working with AI tools"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          The developers who thrive in 2026 and beyond won't be those who resist
          AI — they'll be the ones who learn to <strong>orchestrate</strong> it.
          Think of AI agents as incredibly fast junior developers: they need clear
          instructions, guardrails, and code review, but they never get tired.
        </p>

        <p>
          <em>
            The future of software engineering isn't human vs. AI — it's human
            with AI, building faster and smarter than either could alone.
          </em>
        </p>
      </>
    ),
    author: "Aryan Khatri",
    publishedAt: "2026-02-10",
    readTime: "6 min read",
    tags: ["AI", "Agents", "Software Development", "LLMs", "Automation"],
    category: "AI/ML",
    featured: true,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    slug: "ai-agents-2026-reshaping-software-development",
  },
  {
    id: 3,
    title: "Building Production-Grade Full-Stack Apps with Next.js 15 and Server Actions",
    excerpt:
      "Next.js 15 changes the game with improved Server Actions, Partial Prerendering, and the new compiler. Here's a practical guide to building real apps with it.",
    content: (
      <>
        <p>
          <strong>Next.js 15</strong> has matured into what many consider the most
          complete full-stack React framework available. With stable Server
          Actions, Partial Prerendering (PPR), and the new Turbopack-powered dev
          experience, building production-ready applications has never been more
          streamlined.
        </p>

        <img
          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
          alt="Code on a modern development setup"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          <strong>What makes Next.js 15 special for full-stack development:</strong>
        </p>

        <ul>
          <li>
            <strong>Server Actions</strong> — mutate data directly from components without
            building separate API routes. Form submissions, database writes, and
            revalidation all happen in one place
          </li>
          <li>
            <strong>Partial Prerendering</strong> — combine the speed of static content with
            the freshness of dynamic data on the same page, no config needed
          </li>
          <li>
            <strong>React Server Components</strong> — fetch data at the component level,
            reduce client-side JavaScript, and eliminate waterfalls
          </li>
          <li>
            <strong>Enhanced caching</strong> — fine-grained control over what gets cached,
            revalidated, and streamed
          </li>
        </ul>

        <p>
          <strong>A practical architecture for production apps:</strong>
        </p>

        <ul>
          <li>Use the App Router with nested layouts for shared UI state</li>
          <li>Keep Server Components as the default — only add 'use client' when you need interactivity</li>
          <li>Pair Server Actions with Zod validation for type-safe form handling</li>
          <li>Use Drizzle ORM or Prisma for database access directly in server components</li>
          <li>Deploy on Vercel for zero-config serverless scaling, or self-host with Docker</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          alt="Dashboard application UI"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          The biggest mindset shift is realizing that <strong>the server is your
            friend</strong>. Instead of fetching everything on the client and managing
          loading states manually, let the server do the heavy lifting. Your
          components become simpler, your bundle shrinks, and your users get a
          faster experience.
        </p>

        <p>
          <em>
            Next.js 15 isn't just a framework update — it's a new way of thinking
            about React applications. Start building with it today.
          </em>
        </p>
      </>
    ),
    author: "Aryan Khatri",
    publishedAt: "2026-01-22",
    readTime: "7 min read",
    tags: ["Next.js", "React", "Server Components", "Full Stack", "TypeScript"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop",
    slug: "building-fullstack-apps-nextjs-15-server-actions",
  },
  {
    id: 4,
    title: "Edge Computing in 2026: Why Your Next App Should Run Closer to Users",
    excerpt:
      "Edge computing is moving from buzzword to default architecture. Learn why latency-sensitive applications are ditching centralized clouds for distributed edge runtimes.",
    content: (
      <>
        <p>
          For years, the default architecture for web applications has been
          simple: put your server in <strong>us-east-1</strong> and call it a day.
          But in 2026, that model is rapidly changing as{" "}
          <strong>edge computing</strong> becomes the new baseline for
          performance-critical applications.
        </p>

        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          alt="Global network and server infrastructure"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          <strong>What is edge computing, really?</strong> It's running your
          application logic — API routes, middleware, server-side rendering, even
          AI inference — on servers distributed across the globe, physically close
          to your users. Instead of a 200ms round-trip to a centralized data
          center, your response comes from a node 20ms away.
        </p>

        <p>
          <strong>Why edge computing is exploding right now:</strong>
        </p>

        <ul>
          <li>
            <strong>Platforms are ready</strong> — Vercel Edge Functions, Cloudflare Workers,
            Deno Deploy, and AWS Lambda@Edge all provide mature runtimes with Web
            Standards APIs
          </li>
          <li>
            <strong>Frameworks support it natively</strong> — Next.js, Remix, Nuxt, and
            SvelteKit all have first-class edge deployment targets
          </li>
          <li>
            <strong>Edge databases exist</strong> — Turso (libSQL), PlanetScale, Neon, and
            Cloudflare D1 provide globally-distributed databases with single-digit
            millisecond reads
          </li>
          <li>
            <strong>AI at the edge</strong> — lightweight model inference is now possible on
            edge nodes using WebAssembly and optimized runtimes, enabling real-time
            personalization without cloud round-trips
          </li>
        </ul>

        <p>
          <strong>Best use cases for edge computing:</strong>
        </p>

        <ul>
          <li>Authentication and session validation — check tokens at the edge before requests hit your origin</li>
          <li>A/B testing and feature flags — make decisions in milliseconds without client-side flicker</li>
          <li>Personalized content — serve region-specific pricing, language, and recommendations</li>
          <li>Real-time APIs — chat applications, live dashboards, and collaborative tools</li>
          <li>Image and content optimization — resize, compress, and transform media on-the-fly</li>
        </ul>

        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Earth from space showing network connections"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <p>
          The trade-off? Edge runtimes are <strong>not full Node.js
            environments</strong>. You're working with a subset of APIs — no
          filesystem access, limited CPU time, and smaller memory. But for the
          patterns listed above, those constraints don't matter.
        </p>

        <p>
          <em>
            The future of web performance isn't just about optimizing your code —
            it's about running it in the right place. And that place is the edge.
          </em>
        </p>
      </>
    ),
    author: "Aryan Khatri",
    publishedAt: "2026-02-15",
    readTime: "6 min read",
    tags: ["Edge Computing", "Cloud", "Performance", "Serverless", "Infrastructure"],
    category: "Web Development",
    featured: false,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
    slug: "edge-computing-2026-apps-closer-to-users",
  },
  {
    id: 5,
    title: "Databases Don't Fail at Scale — Designs Do. 10 Techniques Every Builder Must Know",
    excerpt:
      "Everyone talks about 'scaling the backend.' Very few actually understand how databases scale in the real world. Here are the 10 techniques behind every high-traffic system.",
    content: (
      <>
        <p>
          Let me start with a truth that took me a while to learn:{" "}
          <strong>databases don't fail at scale — designs do.</strong>
        </p>

        <p>
          I've seen this firsthand. You build something, it works beautifully with
          a hundred users, and then traffic hits and everything falls apart. Not
          because PostgreSQL or MongoDB are broken — they're battle-tested. It
          breaks because the way you <em>use</em> the database wasn't built for
          what came next.
        </p>

        <p>
          Everyone throws around phrases like "just scale it" or "add more
          servers." But scaling a database isn't a switch you flip. It's a set of
          deliberate engineering decisions, each with trade-offs. Here are the{" "}
          <strong>10 techniques</strong> that actually power real production
          systems — and when to reach for each one.
        </p>

        <img
          src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d"
          alt="Database server infrastructure"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          1. Indexing — The First Thing You Should Try
        </h2>
        <p>
          Before you redesign anything, check your indexes. A missing index on a
          frequently queried column can turn a 5ms lookup into a 5-second full
          table scan. I've seen production databases brought to their knees simply
          because nobody added an index on <code>user_id</code>.
        </p>
        <p>
          <strong>The catch:</strong> over-indexing is real. Every index you add
          speeds up reads but slows down writes, because the database has to
          maintain that index on every INSERT and UPDATE. Index what you query
          often. Remove indexes you don't use. Use <code>EXPLAIN</code> to verify
          they're actually being hit.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          2. Vertical Scaling — The Simplest (and Most Expensive) Fix
        </h2>
        <p>
          Bigger machine. More CPU. More RAM. More disk. This is the scaling
          equivalent of throwing money at the problem — and honestly, it works
          surprisingly well up to a point.
        </p>
        <p>
          If your database is CPU-bound or memory-starved, upgrading the instance
          size can buy you months of breathing room with zero code changes. But
          it has a hard ceiling. There's only so big a single machine can get, and
          the cost curve is exponential. Vertical scaling is a bridge, not a
          destination.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          3. Caching — Stop Asking the Database the Same Question
        </h2>
        <p>
          The fastest database query is the one you never make. If your app hits
          the database for data that changes once an hour but is read thousands
          of times a minute, you're wasting resources.
        </p>
        <p>
          <strong>Redis</strong> and <strong>Memcached</strong> sit in front of
          your database, serving hot data from memory at microsecond speeds. User
          sessions, config data, leaderboards, feed rankings — all of these
          belong in a cache, not in a SQL query on every request.
        </p>
        <p>
          The hard part isn't adding a cache. It's <em>invalidating</em> it
          correctly. Stale cache is worse than no cache.
        </p>

        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
          alt="Server network infrastructure"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          4. Sharding — Splitting Your Data Across Machines
        </h2>
        <p>
          When a single database can't hold or process all your data, you split it
          horizontally. Users A–M go to shard 1, N–Z go to shard 2. Or you shard
          by region, by tenant, by hash of the primary key.
        </p>
        <p>
          Sharding is powerful but complex. Cross-shard queries become painful.
          Rebalancing shards when data grows unevenly is operationally expensive.
          You don't shard because it sounds cool — you shard because you have no
          other choice. Instagram, Uber, Slack — they all shard, but they waited
          as long as possible before doing it.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          5. Replication — One Writer, Many Readers
        </h2>
        <p>
          Most applications are read-heavy. For every write, there are 10, 50, or
          100 reads. Replication takes advantage of this: one primary database
          handles all writes, and multiple replicas serve read traffic.
        </p>
        <p>
          This improves availability (if the primary goes down, a replica can take
          over) and read throughput. The trade-off is replication lag — a replica
          might be a few milliseconds behind, which matters for consistency-sensitive
          operations. Architect your reads accordingly.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          6. Query Optimization — Bad Queries Kill Good Databases
        </h2>
        <p>
          I cannot stress this enough: <strong>your database is only as fast as
            your worst query.</strong> One unoptimized JOIN or a missing WHERE clause
          can lock tables and bring down your entire application.
        </p>
        <p>
          Use <code>EXPLAIN ANALYZE</code> religiously. Look for sequential scans
          where index scans should be. Watch for N+1 queries hiding inside your
          ORM. Set up slow query logging and review it weekly. This is free
          performance — no infrastructure cost, just better SQL.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          7. Connection Pooling — The Fix Nobody Thinks About
        </h2>
        <p>
          Every database connection has overhead — TCP handshake, authentication,
          memory allocation. If every request to your API opens a fresh database
          connection, you'll hit the connection limit way before you hit any CPU
          or memory limit.
        </p>
        <p>
          Connection poolers like <strong>PgBouncer</strong> (for PostgreSQL) or
          built-in pooling in your ORM reuse connections across requests. It's
          one of the highest-impact, lowest-effort optimizations you can make.
          A 5-minute change that can 10x your throughput.
        </p>

        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
          alt="Data visualization and connections"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          8. Vertical Partitioning — Separate the Hot from the Cold
        </h2>
        <p>
          Not every column in your <code>users</code> table is accessed equally.
          You probably read <code>name</code> and <code>email</code> on every
          request, but <code>bio</code>, <code>avatar_url</code>, and{" "}
          <code>preferences_json</code> only on profile pages.
        </p>
        <p>
          Vertical partitioning splits a wide table into narrower ones — core
          columns in one table, profile data in another. The result? Smaller row
          sizes, faster scans, better cache hit rates. Your most common queries
          fly because they're touching less data.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          9. Denormalization — Trading Storage for Speed
        </h2>
        <p>
          Database textbooks teach you to normalize everything — no duplicate
          data, everything in one place. That's great for data integrity. It's
          terrible for read performance at scale.
        </p>
        <p>
          Denormalization means <em>intentionally</em> duplicating data so you
          don't have to JOIN across five tables on every request. Store the
          author's name alongside every blog post. Keep a running count instead of
          counting rows every time. Read-heavy systems love denormalized data.
          The trade-off is that writes become slightly more complex — you have to
          update data in multiple places.
        </p>

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          10. Materialized Views — Precompute the Expensive Stuff
        </h2>
        <p>
          Some queries are inherently expensive — aggregations across millions of
          rows, multi-table joins for dashboards, analytics rollups. Running them
          on every request is madness.
        </p>
        <p>
          Materialized views precompute and <em>store</em> the result of a query.
          Your dashboard reads from the view (fast), and the view refreshes on a
          schedule (every 5 minutes, every hour — whatever makes sense). It's like
          caching, but managed by the database itself.
        </p>

        <img
          src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
          alt="Analytics dashboard showing data"
          style={{ width: "100%", borderRadius: "8px", margin: "20px 0" }}
        />

        <h2 style={{ marginTop: "32px", marginBottom: "16px" }}>
          The Real Secret: Combine Them
        </h2>
        <p>
          Here's what nobody tells you: <strong>no production system uses just
            one technique.</strong> Scaling is about layering strategies:
        </p>
        <ul>
          <li><strong>Caching + Replication</strong> — serve reads from cache first, fall back to replicas, never hit the primary for reads</li>
          <li><strong>Sharding + Indexing</strong> — shard your data across machines, then index within each shard for fast lookups</li>
          <li><strong>Denormalization + Materialized Views</strong> — precompute what you can, denormalize the rest</li>
          <li><strong>Connection Pooling + Query Optimization</strong> — maximize throughput while minimizing per-query cost</li>
        </ul>

        <p>
          The systems that survive real traffic — the ones handling millions of
          requests per second — aren't running on magic infrastructure. They're
          running on <strong>thoughtful design</strong> built by engineers who
          understood these fundamentals.
        </p>

        <p>
          <em>
            Start with indexing and query optimization. Add caching when reads
            dominate. Set up replication when availability matters. And when you've
            genuinely outgrown a single machine — only then — start thinking about
            sharding. That's the order. That's how you scale for real.
          </em>
        </p>
      </>
    ),
    author: "Aryan Khatri",
    publishedAt: "2026-02-20",
    readTime: "10 min read",
    tags: ["Database", "Scaling", "Backend", "System Design", "Performance"],
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop",
    slug: "databases-dont-fail-at-scale-designs-do",
  },
]
