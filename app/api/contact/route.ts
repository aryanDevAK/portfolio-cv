import { type NextRequest, NextResponse } from "next/server"

const WEB3FORMS_KEY = process.env.WEB3FORMS_ACCESS_KEY || ""

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (!WEB3FORMS_KEY || WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      console.error("WEB3FORMS_ACCESS_KEY is not configured in .env.local")
      return NextResponse.json(
        { error: "Contact form is not configured. Please email me directly at aryankhatri.forwork@gmail.com" },
        { status: 500 }
      )
    }

    // Web3Forms expects FormData, NOT JSON
    const formData = new FormData()
    formData.append("access_key", WEB3FORMS_KEY)
    formData.append("name", name)
    formData.append("email", email)
    formData.append("subject", `Portfolio Contact: ${subject}`)
    formData.append("message", message)

    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await web3Res.json()

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      })
    } else {
      console.error("Web3Forms error:", data)
      return NextResponse.json(
        { error: data.message || "Failed to send message. Please try again." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
  }
}
