import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  const ref = useReveal()
  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="reveal group relative glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all overflow-hidden"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl group-hover:bg-fuchsia-500/30 transition-colors" />

      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>

      <p className="mt-3 text-sm text-slate-400 leading-relaxed">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad py-24">
      <SectionHeading kicker="04 · Projects" title="Things I've built" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
