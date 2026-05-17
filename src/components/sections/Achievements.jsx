import { ACHIEVEMENTS } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

export function Achievements() {
  return (
    <section id="achievements" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader eyebrow="07 — Highlights" title="A handful of things I'm quietly proud of." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ACHIEVEMENTS.map((a, i) => (
            <GlassCard key={a.title} className="p-5 md:p-6 reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center shrink-0">
                  <Icon name={a.icon} size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-[14.5px] font-medium leading-snug">{a.title}</div>
                  <div className="mt-1.5 text-[13px] text-[color:var(--ink-dim)] leading-relaxed">{a.note}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
