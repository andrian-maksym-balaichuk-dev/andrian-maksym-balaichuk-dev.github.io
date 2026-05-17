import { EXPERIENCE } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';
import { Icon } from '../ui/Icon';

export function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader eyebrow="02 — Experience" title="Four+ years shipping production C++ — navigation, routing, SDKs, embedded." />
        <div className="flex flex-col gap-5">
          {EXPERIENCE.map((job, i) => (
            <GlassCard key={job.company} className="p-6 md:p-7 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-8">
                <div className="lg:w-[280px] shrink-0 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center">
                      <Icon name="Building2" size={16} />
                    </div>
                    <div>
                      <div className="text-lg font-semibold tracking-tight leading-tight">{job.company}</div>
                      <div className="text-[12px] text-[color:var(--ink-dim)] font-mono">{job.location}</div>
                    </div>
                  </div>
                  <p className="text-[13px] text-[color:var(--ink-dim)] leading-relaxed mt-2">{job.blurb}</p>
                </div>

                <div className="flex-1 min-w-0 flex flex-col gap-6">
                  {job.positions.map((pos, pi) => (
                    <div key={pos.period} className="relative">
                      {job.positions.length > 1 && (
                        <div className="absolute -left-3 top-2 bottom-0 w-px bg-white/10" style={{ display: pi === job.positions.length - 1 ? 'none' : 'block' }} />
                      )}
                      {job.positions.length > 1 && (
                        <span className="absolute -left-[14px] top-2 w-2 h-2 rounded-full"
                              style={{ background: pos.current ? 'oklch(0.82 0.14 150)' : 'rgba(255,255,255,0.4)',
                                       boxShadow: pos.current ? '0 0 10px oklch(0.82 0.14 150)' : 'none' }} />
                      )}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                        <div className="text-[15.5px] font-medium tracking-tight">{pos.role}</div>
                        <div className="font-mono text-[11px] tracking-wider uppercase text-[color:var(--ink-muted)]">
                          {pos.period}
                          {pos.current && <span className="ml-2 text-[oklch(0.82_0.14_150)]">· current</span>}
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2 text-[14px] text-[color:var(--ink-dim)]">
                        {pos.bullets.map((b) => (
                          <li key={b} className="flex gap-3">
                            <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {pos.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
