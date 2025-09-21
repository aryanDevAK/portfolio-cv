// Fallback data from Aryan's resume
export const fallbackData = {
  profile: {
    name: "Aryan Khatri",
    title: "Software Engineer",
    email: "aryankhatri.forwork@gmail.com",
    phone: "+91 78277-39709",
    location: "New Delhi, India",
    summary:
      "Software Engineer and Full Stack Software Developer with expertise in building <b>SAAS products</b>, AI integrated platforms and Automation Software and strong knowledge of OOPS, Agile methodologies, API Development and Integrations and User oriented interfaces. Proven ability to design, code, test, and debug software applications. Expertise in version control using Git and Github. Excellent communication and learning agility skills. Ability to quickly learn new tools and technologies.",
    linkedin: "http://www.linkedin.com/in/aryankhatriak",
    github: "https://github.com/aryanDevAK",
    portfolio: "./resume.pdf",
    cgpa: "8.31",
    university: "Chandigarh University",
    degree: "Bachelor's in Computer Applications",
    duration: "August 2022 - June 2025",
  },

  skills: {
    programmingLanguages: ["Javascript", "SQL", "Python"],
    frontend: ["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Python"],
    databases: ["MongoDB", "MySQL"],
    tools: [
      "Agile Development Methodology",
      "Postman",
      "Google Cloud",
      "Redux",
      "Context API",
      "Bootstrap",
      "GSAP",
      "Framer Motion",
    ],
    versionControl: ["Git", "Github"],
  },

  experience: [
    {
      company: "Intel Corporation",
      position: "Summer Trainee",
      duration: "June 2024 – July 2024",
      location: "Remote",
      achievements: [
        'Trained in foundational concepts of Artificial Intelligence (AI), Machine Learning (ML), and Natural Language Processing (NLP) under the theme "AI for Future Workforce."',
        "Applied training to a real-world project focused on AI in Fintech, utilizing ML and NLP techniques.",
        "Completed end-to-end project lifecycle—research, development, and reporting within 2 weeks.",
        "Achieved 95% project success rate through effective implementation and analysis.",
        "Published a detailed report showcasing project insights, methodology, and outcomes.",
      ],
      certificate: true,
    },
    {
      company: "Infosys",
      position: "SDE Project Intern",
      duration: "March 2024 - June 2024",
      location: "Remote",
      achievements: [
        "Trained in detailed concepts of Agile methodology, SCRUM, Software Development, Python, Optical Character Recognition (OCR), and Natural Language Processing (NLP).",
        "Collaborated in a 25-member Agile team to develop an OCR-driven cheque processing system for banks, resulting in a 90% improvement in operational efficiency.",
        "Presented project outcomes to senior stakeholders, showcasing strong communication and presentation skills.",
      ],
      certificate: true,
    },
  ],

  projects: [
    {
      id: 1,
      title: "AI Course Pilot",
      description:
        "Full-stack AI-powered course creation platform that allows users to generate personalized coding courses based on their interests and skill level.",
      technologies: ["Next.js", "PostgreSQL", "Gemini AI", "YouTube API"],
      features: [
        "AI-powered course generation using Gemini AI",
        "Personalized learning paths based on user input",
        "YouTube API integration for relevant video content",
        "Real-time course creation and customization",
      ],
      liveLink: "#",
      githubLink: "#",
      category: "AI/ML",
      status: "completed",
    },
    {
      id: 2,
      title: "AI Mock Mate",
      description:
        "SaaS platform that simulates mock interviews using Llama AI, providing personalized interview practice with real-time AI evaluation and feedback.",
      technologies: ["Next.js", "PostgreSQL", "Llama AI", "Real-time Processing"],
      features: [
        "AI-powered mock interview simulation",
        "Real-time feedback on communication and clarity",
        "Technical accuracy evaluation",
        "78% reduction in interview anxiety for users",
      ],
      liveLink: "#",
      githubLink: "#",
      category: "AI/ML",
      status: "completed",
    },
    {
      id: 3,
      title: "Veil – Chat based Dating App",
      description:
        "Real-time, chat-based dating application with AI-powered gender verification and 2-factor authentication using government IDs.",
      technologies: ["MERN Stack", "Machine Learning", "Facial Recognition", "2FA"],
      features: [
        "AI-powered gender verification with 95% accuracy",
        "Real-time chat system for opposite gender discovery",
        "Government ID-based 2-factor authentication",
        "80% reduction in fake profile creation",
      ],
      githubLink: "#",
      category: "Full Stack",
      status: "completed",
    },
    {
      id: 4,
      title: "Medixify – AI for Healthcare",
      description:
        "Full-stack healthcare support platform integrating AI and NLP for emergency response and medical report analysis.",
      technologies: ["Flask", "Machine Learning", "NLP", "MySQL", "React.js", "Tailwind CSS"],
      features: [
        "AI-powered emergency response agent",
        "Medical report OCR analysis with 95% accuracy",
        "Real-time patient input analysis",
        "40% reduction in report review time for doctors",
      ],
      githubLink: "#",
      videoLink: "#",
      category: "AI/ML",
      status: "completed",
    },
  ],

  certifications: [
    "IBM Full Stack Software Developer - IBM",
    "IBM Full Stack JavaScript Developer - IBM",
    "Microsoft Python Programming – Certificate",
    "Meta Frontend Developer – Certificate",
  ],

  awards: [
    "Class Representative (August-December 2022) – Certificate",
    "Won 3rd Prize at Engineers day – Certificate",
    "Secretary at Power Coders Society (2022-2023)",
    "Lead Coordinator at GDSC – Chandigarh University (2022-2023)",
    "Lead Technical Coordinator at CUFEST-2023 – Certificate",
    "Won Tekathon 2.0 - Certificate",
    "Finalist at Smart India Hackathon (SIH) 2023",
  ],

  blogs: [
    {
      id: 1,
      title: "Building AI-Powered Course Creation Platforms",
      excerpt:
        "How I built an AI-driven platform that generates personalized coding courses using Gemini AI and modern web technologies.",
      content:
        "In this comprehensive guide, I'll walk you through the process of building an AI-powered course creation platform. From integrating Gemini AI for content generation to implementing real-time course customization, this project showcases the power of combining AI with modern web development...",
      author: "Aryan Khatri",
      publishedAt: "2024-12-15",
      readTime: "8 min read",
      tags: ["AI", "Next.js", "Gemini AI", "Full Stack"],
      category: "AI/ML",
      featured: true,
      image: "/blog-ai-course-platform.jpg",
      slug: "building-ai-powered-course-creation-platforms",
    },
    {
      id: 2,
      title: "The Future of AI in Interview Preparation",
      excerpt:
        "Exploring how AI is revolutionizing interview preparation with real-time feedback and personalized coaching.",
      content:
        "The job interview process has remained largely unchanged for decades, but AI is beginning to transform how candidates prepare. In this article, I explore the development of AI Mock Mate, a platform that uses Llama AI to provide realistic interview simulations...",
      author: "Aryan Khatri",
      publishedAt: "2024-12-10",
      readTime: "6 min read",
      tags: ["AI", "Career", "Interview Prep", "SaaS"],
      category: "AI/ML",
      featured: false,
      image: "/blog-ai-interview-prep.jpg",
      slug: "future-of-ai-in-interview-preparation",
    },
    {
      id: 3,
      title: "Building Secure Dating Apps with AI Verification",
      excerpt:
        "How we achieved 95% accuracy in gender verification and reduced fake profiles by 80% using machine learning.",
      content:
        "Online dating safety is a critical concern in today's digital world. In this technical deep-dive, I share how we built Veil, a chat-based dating app that uses AI-powered gender verification and government ID authentication to create a safer dating environment...",
      author: "Aryan Khatri",
      publishedAt: "2024-12-05",
      readTime: "10 min read",
      tags: ["Security", "Machine Learning", "MERN Stack", "Authentication"],
      category: "Full Stack",
      featured: true,
      image: "/blog-secure-dating-apps.jpg",
      slug: "building-secure-dating-apps-with-ai-verification",
    },
    {
      id: 4,
      title: "Healthcare AI: Transforming Medical Report Analysis",
      excerpt:
        "How NLP and OCR technologies are revolutionizing healthcare by automating medical report analysis with 95% accuracy.",
      content:
        "The healthcare industry generates massive amounts of data daily, with medical reports being a significant portion. In this article, I discuss the development of Medixify, an AI-powered healthcare platform that uses NLP and OCR to analyze medical reports...",
      author: "Aryan Khatri",
      publishedAt: "2024-11-28",
      readTime: "7 min read",
      tags: ["Healthcare", "NLP", "OCR", "Python", "AI"],
      category: "AI/ML",
      featured: false,
      image: "/blog-healthcare-ai.jpg",
      slug: "healthcare-ai-transforming-medical-report-analysis",
    },
    {
      id: 5,
      title: "My Journey from Intern to Full Stack Developer",
      excerpt: "Lessons learned during my internships at Intel and Infosys, and how they shaped my development career.",
      content:
        "Starting as a summer trainee at Intel and later working as an SDE Project Intern at Infosys taught me invaluable lessons about software development, teamwork, and professional growth. In this personal reflection, I share the key insights and experiences...",
      author: "Aryan Khatri",
      publishedAt: "2024-11-20",
      readTime: "5 min read",
      tags: ["Career", "Internship", "Personal Growth", "Software Development"],
      category: "Career",
      featured: false,
      image: "/blog-internship-journey.jpg",
      slug: "my-journey-from-intern-to-full-stack-developer",
    },
    {
      id: 6,
      title: "Modern Web Development with Next.js and AI Integration",
      excerpt: "Best practices for building scalable web applications with Next.js while integrating AI capabilities.",
      content:
        "Next.js has become the go-to framework for modern web development, especially when building AI-integrated applications. In this comprehensive guide, I share best practices, performance optimization techniques, and real-world examples from my projects...",
      author: "Aryan Khatri",
      publishedAt: "2024-11-15",
      readTime: "12 min read",
      tags: ["Next.js", "Web Development", "AI Integration", "Performance"],
      category: "Web Development",
      featured: true,
      image: "/blog-nextjs-ai-integration.jpg",
      slug: "modern-web-development-nextjs-ai-integration",
    },
  ],
}

// API integration functions with fallback
export async function fetchProfile() {
  try {
    // In a real implementation, this would fetch from an API
    // const response = await fetch('/api/profile')
    // if (!response.ok) throw new Error('Failed to fetch profile')
    // return await response.json()

    // For now, return fallback data
    return fallbackData.profile
  } catch (error) {
    console.warn("Failed to fetch profile from API, using fallback data:", error)
    return fallbackData.profile
  }
}

export async function fetchExperience() {
  try {
    // const response = await fetch('/api/experience')
    // if (!response.ok) throw new Error('Failed to fetch experience')
    // return await response.json()

    return fallbackData.experience
  } catch (error) {
    console.warn("Failed to fetch experience from API, using fallback data:", error)
    return fallbackData.experience
  }
}

export async function fetchProjects() {
  try {
    // const response = await fetch('/api/projects')
    // if (!response.ok) throw new Error('Failed to fetch projects')
    // return await response.json()

    return fallbackData.projects
  } catch (error) {
    console.warn("Failed to fetch projects from API, using fallback data:", error)
    return fallbackData.projects
  }
}

export async function fetchSkills() {
  try {
    // const response = await fetch('/api/skills')
    // if (!response.ok) throw new Error('Failed to fetch skills')
    // return await response.json()

    return fallbackData.skills
  } catch (error) {
    console.warn("Failed to fetch skills from API, using fallback data:", error)
    return fallbackData.skills
  }
}

export async function submitContactForm(formData: {
  name: string
  email: string
  subject: string
  message: string
}) {
  try {
    // In a real implementation, this would submit to an API
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
    // if (!response.ok) throw new Error('Failed to submit form')
    // return await response.json()

    // For now, simulate success and use mailto fallback
    console.log("Contact form submitted:", formData)
    const mailtoLink = `mailto:${fallbackData.profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    return { success: true, message: "Message sent successfully!" }
  } catch (error) {
    console.warn("Failed to submit contact form to API, using mailto fallback:", error)
    const mailtoLink = `mailto:${fallbackData.profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    return { success: true, message: "Opening email client..." }
  }
}

export async function fetchBlogs() {
  try {
    // In a real implementation, this would fetch from an API
    // const response = await fetch('/api/blogs')
    // if (!response.ok) throw new Error('Failed to fetch blogs')
    // return await response.json()

    return fallbackData.blogs
  } catch (error) {
    console.warn("Failed to fetch blogs from API, using fallback data:", error)
    return fallbackData.blogs
  }
}

export async function fetchBlogBySlug(slug: string) {
  try {
    // In a real implementation, this would fetch from an API
    // const response = await fetch(`/api/blogs/${slug}`)
    // if (!response.ok) throw new Error('Failed to fetch blog')
    // return await response.json()

    const blog = fallbackData.blogs.find((blog) => blog.slug === slug)
    if (!blog) throw new Error("Blog not found")
    return blog
  } catch (error) {
    console.warn("Failed to fetch blog from API, using fallback data:", error)
    return fallbackData.blogs.find((blog) => blog.slug === slug) || null
  }
}
