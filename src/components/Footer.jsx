import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="section-pad py-10 text-center text-sm text-slate-500">
      <p>
        Built by {profile.name} ·{' '}
        <span className="text-gradient font-mono">React + Tailwind</span> ·{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  )
}
