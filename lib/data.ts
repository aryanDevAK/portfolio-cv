import { blogs } from "./blogs"

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
    programmingLanguages: ["JavaScript", "TypeScript", "SQL", "Python"],
    frontend: ["Next.js", "React.js", "React Native", "Redux", "Streamlit", "HTML", "CSS", "Tailwind CSS"],
    backend: ["FastAPI", "Django", "Flask", "Node.js", "Express.js", "Ruby on Rails"],
    databases: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: [
      "AI Agents",
      "LangChain",
      "Llama Models",
      "RAG",
      "NLP",
      "OCR",
      "Docker",
      "AWS ECS/EC2",
      "AWS Amplify",
      "CloudFormation",
      "CodePipeline",
      "Jenkins",
      "Portainer",
      "Linux",
      "Git",
      "Github",
      "CI/CD",
      "REST APIs",
      "Authentication Systems",
      "SaaS Architecture",
      "Agile/Scrum"
    ],
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

    return blogs
  } catch (error) {
    console.warn("Failed to fetch blogs from API, using fallback data:", error)
    return blogs
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
