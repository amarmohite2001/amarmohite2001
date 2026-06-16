import type { Metadata } from 'next'
import { CONTENT } from '@/data/content'

export const metadata: Metadata = {
  title: 'Amar Mohite - Resume',
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
            href={resume.file}
            className="btn btn-primary resume-download-btn"
            download
          >
            {resume.buttonLabel}
          </a>
        </div>

        <div className="resume-frame-wrap">
          <iframe
            className="resume-frame"
            src={resume.file}
            title={resume.frameTitle}
          />
        </div>
      </section>
    </main>
  )
}
