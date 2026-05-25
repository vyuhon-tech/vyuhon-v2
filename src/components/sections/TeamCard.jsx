export default function TeamCard({ initials, name, role, bio, gradFrom, gradTo }) {
  return (
    <div className="py-8 px-6 bg-light border border-light-3 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-[5px] hover:border-brand-purple/25">
      <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center font-heading text-2xl font-extrabold text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
        style={{ background: `linear-gradient(135deg, ${gradFrom}, ${gradTo})` }}>
        {initials}
      </div>
      <div className="font-heading text-[1.1rem] font-bold text-ink mb-1">{name}</div>
      <div className="text-[0.8rem] text-brand-purple2 font-semibold mb-2.5">{role}</div>
      <p className="text-[0.8rem] text-ink-soft leading-[1.65]">{bio}</p>
    </div>
  )
}
