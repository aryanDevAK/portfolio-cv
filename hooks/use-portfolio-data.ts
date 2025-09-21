"use client"

import { useState, useEffect } from "react"
import { fetchProfile, fetchExperience, fetchProjects, fetchSkills } from "@/lib/data"

export function usePortfolioData() {
  const [data, setData] = useState({
    profile: null,
    experience: [],
    projects: [],
    skills: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    async function loadData() {
      try {
        setData((prev) => ({ ...prev, loading: true, error: null }))

        const [profile, experience, projects, skills] = await Promise.all([
          fetchProfile(),
          fetchExperience(),
          fetchProjects(),
          fetchSkills(),
        ])

        setData({
          profile,
          experience,
          projects,
          skills,
          loading: false,
          error: null,
        })
      } catch (error) {
        console.error("Error loading portfolio data:", error)
        setData((prev) => ({
          ...prev,
          loading: false,
          error: "Failed to load portfolio data",
        }))
      }
    }

    loadData()
  }, [])

  return data
}
