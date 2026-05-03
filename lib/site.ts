/**
 * Single source of truth for the public site URL.
 *
 * Set NEXT_PUBLIC_SITE_URL once in Vercel → Project → Environment Variables
 * and it will be used by metadata, OpenGraph, Twitter cards, sitemap.xml,
 * robots.txt, manifest.webmanifest, JSON-LD and any canonical / absolute URLs.
 *
 * Fallbacks:
 *  1. NEXT_PUBLIC_SITE_URL (manually set, e.g. https://championslots.com)
 *  2. VERCEL_PROJECT_PRODUCTION_URL (auto provided by Vercel for prod deploys)
 *  3. VERCEL_URL (auto provided by Vercel for any preview deploy)
 *  4. http://localhost:3000 (local dev)
 */
function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "http://localhost:3000"

  // Normalize: ensure protocol + strip trailing slash
  const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  return withProto.replace(/\/+$/, "")
}

export const SITE_URL = resolveSiteUrl()

export const SITE_NAME = "Champion Casino"
export const SITE_BRAND = "Champion Slots"

export const SITE_TITLE = "Champion Casino · Champion Slots — официальный сайт"
export const SITE_DESCRIPTION =
  "Champion Casino и Champion Slots — чемпион казино онлайн. Официальный сайт, рабочее зеркало, champion casino вход, слоты, бонусы и турниры каждый день."

export const SITE_KEYWORDS = [
  "champion casino",
  "champion slots",
  "champion slots casino",
  "champion casino зеркало",
  "champion casino вход",
  "champion casino играть",
  "чемпион казино",
  "чемпион слотс",
  "чемпион слотс казино",
  "чемпион казино зеркало",
  "чемпион казино онлайн",
  "чемпион казино официальный",
  "чемпион казино официальный сайт",
  "champion казино",
]

/** Build an absolute URL on the configured domain. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
