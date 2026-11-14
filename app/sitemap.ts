import type { MetadataRoute } from 'next'
import { CONTENT } from '@/data/content'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = CONTENT.site

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${url}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${url}/blog/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${url}/resume/`, changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = CONTENT.blog.posts.map(post => ({
    url: `${url}/blog/${post.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes]
}
