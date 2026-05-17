import { EDUCATION } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

export function Education() {
  return (
    <section id="education" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="06 — Education"
          title="Where the fundamentals came from."
          kicker="Three institutions across Ukraine and Slovakia — software engineering foundations, then computer science, now a master's, all in parallel with full-time work."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EDUCATION.map((e, i) => (
            <GlassCard key={e.school} className="p-6 md:p-7 reveal h-full flex flex-col" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center shrink-0">
                  <Icon name="GraduationCap" size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[15px] font-medium leading-tight">{e.school}</div>
                  <div className="text-[13px] text-[color:var(--ink-dim)] mt-1">{e.degree}</div>
                </div>
              </div>
              <div className="font-mono text-[11px] text-[color:var(--ink-muted)] tracking-wider uppercase mt-3">{e.period}</div>
              <div className="divider my-4" />
              <p className="text-[13px] text-[color:var(--ink-dim)] leading-relaxed flex-1">{e.note}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
