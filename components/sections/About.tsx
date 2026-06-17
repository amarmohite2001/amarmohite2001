import Link from 'next/link'
import { CONTENT } from '@/data/content'
import { asset } from '@/lib/asset'

export default function About() {
  const { about } = CONTENT

  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img src={asset(about.bannerSrc)} alt={about.bannerAlt} className="w-100" />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">{about.subtitle}</p>
        <h2 className="h3 section-title">{about.title}</h2>
        <p className="section-text">{about.text}</p>

        <div className="btn-group">
          <Link href={about.primaryButton.href} className="btn btn-secondary">
            {about.primaryButton.label}
          </Link>
          <a
            href={about.secondaryButton.href}
            download
            className="btn btn-primary"
          >
            {about.secondaryButton.label}
          </a>
        </div>
      </div>
    </section>
  )
}
