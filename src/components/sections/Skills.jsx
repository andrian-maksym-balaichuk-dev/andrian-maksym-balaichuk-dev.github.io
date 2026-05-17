import { SKILLS } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Meter } from '../ui/Meter';

export function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="03 — Skills"
          title="Depth where it matters. Breadth where it ships."
          kicker="The toolbox I reach for. Levels are honest self-assessments — anything ≥85 means I'd be comfortable owning the area on day one."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((g, gi) => (
            <GlassCard key={g.group} className="p-6 md:p-7 reveal" style={{ transitionDelay: `${gi * 70}ms` }}>
              <div className="flex items-center justify-between mb-5">
                <div className="text-[15px] font-medium">{g.group}</div>
                <span className="font-mono text-[11px] text-[color:var(--ink-muted)] tracking-wider uppercase">{g.items.length} items</span>
              </div>
              <div className="flex flex-col gap-4">
                {g.items.map(s => (
                  <div key={s.name}>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-[14px]">{s.name}</span>
                      <span className="font-mono text-[11px] text-[color:var(--ink-muted)]">{s.level}</span>
                    </div>
                    <Meter value={s.level} />
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
