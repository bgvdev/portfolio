import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="section-pad relative flex min-h-screen flex-col items-start justify-center pt-24">
      <p className="font-mono text-sm text-cyan-300 animate-fade-up">Hi, I'm</p>

      <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white animate-fade-up delay-100">
        {profile.name}
      </h1>

      <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-gradient animate-fade-up delay-200">
        {profile.role}
      </h2>

      <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 animate-fade-up delay-300">
        {profile.summary}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up delay-400">
        <a
          href="#projects"
          className="rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 px-6 py-3 text-sm font-semibold text-ink hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
        >
          Get In Touch
        </a>
      </div>

      <div className="mt-12 flex items-center gap-3 text-sm text-slate-500 animate-fade-up delay-500">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        Open to new opportunities · {profile.location}
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-float"
        aria-label="Scroll down"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
      </a>
    </section>
  )
}
