export default function SectionHeading({ kicker, title }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-cyan-300">{kicker}</p>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300" />
    </div>
  )
}
