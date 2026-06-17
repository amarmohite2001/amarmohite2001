'use client'

import { useState } from 'react'
import { CONTENT, SkillItem } from '@/data/content'
import { asset } from '@/lib/asset'

function SkillCard({ skill }: { skill: SkillItem }) {
  return (
    <li>
      <div className="skill-card">
        <div className="tooltip">{skill.name}</div>
        <div className="card-icon">
          <img src={asset(skill.icon)} alt={skill.alt} />
        </div>
      </div>
    </li>
  )
}

export default function Skills() {
  const { skills } = CONTENT
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">{skills.subtitle}</p>
        <h2 className="h3 section-title">{skills.title}</h2>
        <p className="section-text">{skills.text}</p>

        <div
          className="skills-toggle"
          data-active={activeTab}
        >
          {skills.tabLabels.map((label, i) => (
            <button
              key={label}
              className={`toggle-btn${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-box" data-active={activeTab}>
        <ul className="ai-list">
          {skills.ai.map(skill => <SkillCard key={skill.name} skill={skill} />)}
        </ul>
        <ul className="skills-list">
          {skills.languages.map(skill => <SkillCard key={skill.name} skill={skill} />)}
        </ul>
        <ul className="tools-list">
          {skills.tools.map(skill => <SkillCard key={skill.name} skill={skill} />)}
        </ul>
      </div>
    </section>
  )
}
