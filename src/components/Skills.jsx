import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { skills } from '../data/content'

function SkillCard({ group, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <h3 className="font-mono text-sm text-amber-300">{group.category}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((s) => (
          <span
            key={s}
            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad py-24">
      <SectionHeading kicker="03 · Skills" title="Tools I work with" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
