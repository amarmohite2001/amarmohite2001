import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Certifications from '@/components/sections/Certifications'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <main>
      <article className="container">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </article>
    </main>
  )
}
