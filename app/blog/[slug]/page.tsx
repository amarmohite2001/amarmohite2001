import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CONTENT } from '@/data/content'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return CONTENT.blog.posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = CONTENT.blog.posts.find(p => p.slug === slug)
  return {
    title: post ? `Amar Mohite - ${post.title}` : 'Amar Mohite - Blog',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = CONTENT.blog.posts.find(p => p.slug === slug)

  if (!post) notFound()

  return (
    <main className="inner-page blog-post-page">
      <section className="container">
        <div className="inner-page-header">
          <p className="section-subtitle">{post.category}</p>
          <h2 className="inner-page-title">{post.title}</h2>
          <p className="inner-page-text">{post.intro}</p>
        </div>

        <article className="blog-post-article">
          <p className="blog-post-meta">
            {post.date} · {post.readTime}
          </p>

          <div className="blog-post-content">
            {post.sections.map((section, i) => (
              <section key={i} className="blog-post-section">
                {section.heading && (
                  <h3 className="blog-post-heading">{section.heading}</h3>
                )}
                {section.paragraphs?.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="blog-post-list">
                    {section.bullets.map((bullet, k) => (
                      <li key={k}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>

        <Link href="/blog/" className="blog-post-backlink">
          ← Back to Blog
        </Link>
      </section>
    </main>
  )
}
