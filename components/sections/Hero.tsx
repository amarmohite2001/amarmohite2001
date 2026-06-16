import Link from 'next/link'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import { CONTENT } from '@/data/content'

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <IoLogoLinkedin />,
  GitHub: <IoLogoGithub />,
}

export default function Hero() {
  const { hero } = CONTENT

  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <picture>
          <source srcSet={hero.bannerLg} media="(min-width: 768px)" />
          <source srcSet={hero.bannerMd} media="(min-width: 500px)" />
          <img src={hero.bannerSm} alt={hero.bannerAlt} className="w-100" />
        </picture>
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">{hero.title}</h2>
        <Link href={hero.ctaHref} className="btn btn-primary">
          {hero.ctaLabel}
        </Link>
      </div>

      <ul className="hero-social-list">
        {hero.socials.map(social => (
          <li key={social.label}>
            <a
              href={social.href}
              className="hero-social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SOCIAL_ICONS[social.label]}
              <div className="tooltip">{social.label}</div>
            </a>
          </li>
        ))}
      </ul>

      <a href="#stats" className="scroll-down">
        {hero.scrollLabel}
      </a>
    </section>
  )
}
