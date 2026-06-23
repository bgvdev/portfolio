import useReveal from '../hooks/useReveal'
import { profile } from '../data/content'

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="section-pad py-24">
      <div ref={ref} className="reveal glass relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

        <p className="font-mono text-sm text-cyan-300">06 · Contact</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
          Let's build something <span className="text-gradient">great</span> together.
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-slate-400">
          I'm currently open to new opportunities. Whether you have a question or just
          want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 px-8 py-3 text-sm font-semibold text-ink hover:scale-105 transition-transform"
        >
          Say Hello
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
          <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">
            {profile.email}
          </a>
          <span className="text-slate-600">·</span>
          <a href={`tel:${profile.phone}`} className="hover:text-white transition-colors">
            {profile.phone}
          </a>
          <span className="text-slate-600">·</span>
          <span>{profile.location}</span>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 p-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 p-3 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
