import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTENT } from '@/data/content'

export const metadata: Metadata = {
  title: `Amar Mohite - Blog`,
  description: CONTENT.blog.text,
}

export default function BlogPage() {
  const { blog } = CONTENT

  return (
    <main className="inner-page blog-page">
      <section className="container">
        <div className="inner-page-header">
          <p className="section-subtitle">{blog.subtitle}</p>
          <h2 className="inner-page-title">{blog.title}</h2>
          <p className="inner-page-text">{blog.text}</p>
        </div>

        <ul className="blog-list">
          {blog.posts.map(post => (
            <li key={post.slug} className="blog-card">
              <Link
                href={`/blog/${post.slug}/`}
                className="blog-card-link"
                aria-label={post.title}
              >
                <div className="blog-meta">
                  <p className="blog-date">{post.date}</p>
                  <p className="blog-read-time">{post.readTime}</p>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="blog-link-label">Read article</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
