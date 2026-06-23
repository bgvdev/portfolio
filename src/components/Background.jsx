export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl animate-blob delay-200" />
      <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl animate-blob delay-400" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
