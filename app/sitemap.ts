import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    { path: "/", priority: 1, changeFrequency: "daily" as const },
    { path: "/slots", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/live", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/crash", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/tournaments", priority: 0.8, changeFrequency: "daily" as const },
    { path: "/promo", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/bonuses", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/login", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/register", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/mirror", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/contacts", priority: 0.4, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/responsible-gaming", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
