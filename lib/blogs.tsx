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
    category: "Education & Career",
    featured: true,
    image: "/blog_1.png",
    slug: "gap-between-indian-education-and-corporate-demands",
  },
]
