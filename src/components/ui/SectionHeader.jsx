export function SectionHeader({ eyebrow, title, kicker }) {
  return (
    <div className="mb-8 md:mb-14 flex flex-col gap-3 max-w-3xl reveal">
      <div className="flex items-center gap-3">
        <span className="chip-dot" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
        {title}
      </h2>
      {kicker && <p className="text-[14px] md:text-base text-[color:var(--ink-dim)] max-w-2xl leading-relaxed">{kicker}</p>}
    </div>
  );
}
