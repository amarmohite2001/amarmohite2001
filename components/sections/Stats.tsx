import { IoChevronForwardOutline } from 'react-icons/io5'
import { CONTENT } from '@/data/content'

const STAT_ICONS = [
  '/images/stats-card_icon-1.png',
  '/images/stats-card_icon-2.png',
  '/images/stats-card_icon-3.png',
]

const STAT_ICON_ALTS = ['Badge icon', 'Checkmark icon', 'Peoples rating icon']

export default function Stats() {
  const { stats } = CONTENT

  return (
    <section className="stats" id="stats">
      <ul className="stats-list">
        {stats.map((stat, i) => (
          <li key={stat.description}>
            <a href={stat.href} className="stats-card">
              <div className="card-icon">
                <img src={STAT_ICONS[i]} alt={STAT_ICON_ALTS[i]} />
              </div>
              <h2 className="h2 card-title">
                {stat.value} <strong>{stat.description}</strong>
              </h2>
              <span className="icon">
                <IoChevronForwardOutline />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
