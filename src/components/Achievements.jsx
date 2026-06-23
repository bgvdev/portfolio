import useReveal from '../hooks/useReveal'
import SectionHeading from './SectionHeading'
import { achievements } from '../data/content'

export default function Achievements() {
  const ref = useReveal()
  return (
    <section className="section-pad py-24">
      <div ref={ref} className="reveal">
        <SectionHeading kicker="05 · Achievements" title="Highlights & contributions" />
        <ul className="grid gap-4 sm:grid-cols-2">
          {achievements.map((a) => (
            <li key={a} className="glass rounded-2xl p-5 text-sm text-slate-400 leading-relaxed flex gap-3">
              <span className="text-amber-300 text-lg leading-none">★</span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
