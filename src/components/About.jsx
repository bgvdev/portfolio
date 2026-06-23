import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { education, profile } from '../data/content'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section-pad py-24">
      <div ref={ref} className="reveal">
        <SectionHeading kicker="01 · About" title="A bit about me" />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-slate-400 leading-relaxed">
            <p>
              I'm a Software Engineer with 3 years of experience designing and building
              scalable web applications and backend systems. I enjoy working across the
              stack — from optimizing database queries and designing REST APIs, to shipping
              polished frontends in React and Next.js.
            </p>
            <p>
              I've worked extensively with distributed system components like Redis and
              Kafka, containerized development workflows with Docker, and have a strong
              foundation in system design, clean architecture, and problem solving. I'm
              actively exploring AI-powered applications and use tools like Claude Code to
              accelerate development.
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-mono text-sm text-amber-300 mb-4">Education</h3>
            <p className="font-semibold text-white">{education.degree}</p>
            <p className="text-sm text-slate-400 mt-1">{education.school}</p>
            <p className="text-sm text-slate-500 mt-1">
              {education.period} · {education.gpa}
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="font-mono text-sm text-amber-300 mb-3">Quick Facts</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>📍 {profile.location}</li>
                <li>💼 3+ years professional experience</li>
                <li>🧩 200+ DSA problems solved</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
