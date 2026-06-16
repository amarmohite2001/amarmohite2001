import { CONTENT } from '@/data/content'

export default function Experience() {
  const { experience } = CONTENT

  return (
    <section className="experience" id="experience">
      <div className="experience-content section-content">
        <p className="section-subtitle">{experience.subtitle}</p>
        <h2 className="h3 section-title">{experience.title}</h2>
        <p className="section-text">{experience.text}</p>
      </div>

      <ul className="experience-list">
        {experience.items.map(item => (
          <li key={`${item.company}-${item.period}`} className="experience-card">
            <div className="experience-head">
              <h3 className="h4 experience-role">{item.role}</h3>
              <p className="experience-period">{item.period}</p>
            </div>
            <p className="experience-company">{item.company}</p>
            <ul className="experience-points">
              {item.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
