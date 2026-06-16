'use client'

import { FormEvent, useRef } from 'react'
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoPersonCircle,
  IoMail,
  IoCall,
  IoChatbubbles,
} from 'react-icons/io5'
import { CONTENT } from '@/data/content'

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  LinkedIn: <IoLogoLinkedin />,
  GitHub: <IoLogoGithub />,
}

export default function Contact() {
  const { contact } = CONTENT
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    const name    = (form.querySelector('#name')    as HTMLInputElement)?.value.trim()
    const email   = (form.querySelector('#email')   as HTMLInputElement)?.value.trim()
    const phone   = (form.querySelector('#phone')   as HTMLInputElement)?.value.trim()
    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value.trim()

    const text = [
      'Hi Amar! I found you through your portfolio.',
      '',
      `Name: ${name}`,
      email   ? `Email: ${email}`   : '',
      phone   ? `Phone: ${phone}`   : '',
      message ? `\nMessage:\n${message}` : '',
    ].filter(Boolean).join('\n')

    window.open(
      `${contact.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">{contact.subtitle}</p>
        <h2 className="h3 section-title">{contact.title}</h2>
        <p className="section-text">{contact.text}</p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoLocationOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{contact.addressTitle}</h3>
              <address className="contact-info">{contact.address}</address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoCallOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{contact.phoneTitle}</h3>
              {contact.phones.map(p => (
                <a key={p.href} href={p.href} className="contact-info">
                  {p.label}
                </a>
              ))}
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <IoMailOutline />
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">{contact.emailTitle}</h3>
              {contact.emails.map(em => (
                <a key={em.href} href={em.href} className="contact-info">
                  {em.label}
                </a>
              ))}
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              {contact.socials.map(social => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="tooltip">{social.label}</div>
                    {SOCIAL_ICONS[social.label]}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>

      <form
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">
            {contact.form.labels.name}
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder={contact.form.placeholders.name}
              className="input-field"
            />
            <span className="icon"><IoPersonCircle /></span>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">
            {contact.form.labels.email}
          </label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder={contact.form.placeholders.email}
              className="input-field"
            />
            <span className="icon"><IoMail /></span>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">
            {contact.form.labels.phone}
          </label>
          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder={contact.form.placeholders.phone}
              className="input-field"
            />
            <span className="icon"><IoCall /></span>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">
            {contact.form.labels.message}
          </label>
          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required
              placeholder={contact.form.placeholders.message}
              className="input-field"
            />
            <span className="icon"><IoChatbubbles /></span>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          {contact.form.submitLabel}
        </button>
      </form>
    </section>
  )
}
