import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  // TODO: set NEXT_PUBLIC_BASE_URL di environment ke domain production kamu.
  // Jangan biarkan fallback ini menunjuk ke domain orang lain.
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com"

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
