import { CONTENT } from '@/data/content'

export default function Certifications() {
  const { certifications } = CONTENT

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-content section-content">
        <p className="section-subtitle">{certifications.subtitle}</p>
        <h2 className="h3 section-title">{certifications.title}</h2>
      </div>

      <ul className="cert-list">
        {certifications.items.map(cert => (
          <li key={cert.href}>
            <a
              href={cert.href}
              className="cert-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={cert.image} alt={cert.imageAlt} className="cert-badge" />
              <p className="cert-label">
                {cert.label}
                <br />
                <span>{cert.labelSub}</span>
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
