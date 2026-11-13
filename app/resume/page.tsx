import type { Metadata } from 'next'
import { CONTENT } from '@/data/content'
import { asset } from '@/lib/asset'

const title = 'Amar Mohite - Resume'
const description = CONTENT.resume.text
const url = `${CONTENT.site.url}/resume/`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: CONTENT.brand.name,
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
}

export default function ResumePage() {
  const { resume } = CONTENT

  return (
    <main className="inner-page resume-page">
      <section className="container">
        <div className="inner-page-header">
          <p className="section-subtitle">{resume.subtitle}</p>
          <h2 className="inner-page-title">{resume.title}</h2>
          <p className="inner-page-text">{resume.text}</p>
          <a
            href={asset(resume.file)}
            className="btn btn-primary resume-download-btn"
            download
          >
            {resume.buttonLabel}
          </a>
        </div>

        <div className="resume-frame-wrap">
          <iframe
            className="resume-frame"
            src={asset(resume.file)}
            title={resume.frameTitle}
          />
        </div>
      </section>
    </main>
  )
}
