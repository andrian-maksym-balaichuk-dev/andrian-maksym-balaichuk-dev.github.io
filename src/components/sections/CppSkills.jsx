import { CPP_PILLARS } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Spotlight } from '../ui/Spotlight';
import { Icon } from '../ui/Icon';

export function CppSkills() {
  return (
    <section id="cpp" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="04 — Main C++ skills"
          title="What I actually do in C++ — in depth."
          kicker="The places C++ shows up in my day-to-day work, and the techniques I reach for first. This is the skill set I'd bring to a senior role on day one."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {CPP_PILLARS.map((p, i) => (
            <Spotlight key={p.title} className="rounded-[22px]">
              <GlassCard className="p-5 md:p-6 reveal h-full flex flex-col" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center">
                    <Icon name={p.icon} size={16} />
                  </div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-[color:var(--ink-muted)]">/{(i + 1).toString().padStart(2, '0')}</span>
                </div>
                <div className="text-[15.5px] font-medium tracking-tight">{p.title}</div>
                <p className="mt-2 text-[13px] text-[color:var(--ink-dim)] leading-relaxed flex-1">{p.body}</p>
                <ul className="mt-4 flex flex-col gap-2 border-t border-white/[0.07] pt-4">
                  {p.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2.5 text-[12.5px] leading-snug">
                      <Icon name="Check" size={12} className="mt-[3px] shrink-0" style={{ color: 'oklch(0.82 0.14 150)' }} />
                      <span className="text-[color:var(--ink-dim)]">{b}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
