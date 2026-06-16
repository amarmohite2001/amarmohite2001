import { CONTENT } from '@/data/content'

export default function Projects() {
  const { projects } = CONTENT

  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">{projects.subtitle}</p>
            <h2 className="h3 section-title">{projects.title}</h2>
            <p className="section-text">{projects.text}</p>
          </div>
        </li>

        {projects.cards.map(card => (
          <li key={card.title}>
            <a href={card.href} className="project-card">
              <figure className="card-banner">
                <img src={card.image} className="w-100" alt={card.imageAlt} />
              </figure>
              <div className="card-content">
                <h3 className="h4 card-title">{card.title}</h3>
                <time className="publish-date" dateTime={card.dateTime}>
                  {card.dateLabel}
                </time>
              </div>
            </a>
          </li>
        ))}

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  )
}
