import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { experience } from '../data/content'

function ExperienceItem({ item, index }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal relative pl-10 ${index !== 0 ? 'mt-12' : ''}`}>
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
      <span className="absolute left-[5px] top-5 bottom-[-3rem] w-px bg-white/10 last:hidden" />

      <div className="glass rounded-2xl p-6 hover:border-white/20 transition-colors">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">
            {item.role} · <span className="text-gradient">{item.company}</span>
          </h3>
          <span className="font-mono text-xs text-slate-500">{item.period}</span>
        </div>
        <p className="text-sm text-slate-500 mt-1">{item.location}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-400">
          {item.points.map((p) => (
            <li key={p} className="flex gap-2">
              <span className="text-cyan-400 mt-1">▸</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad py-24">
      <SectionHeading kicker="02 · Experience" title="Where I've worked" />
      <div>
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
