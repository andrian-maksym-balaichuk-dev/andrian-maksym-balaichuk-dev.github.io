import { PROJECTS } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Spotlight } from '../ui/Spotlight';
import { Tag } from '../ui/Tag';
import { Icon } from '../ui/Icon';

export function Projects() {
  return (
    <section id="projects" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="05 — Projects"
          title="Open source &amp; production work."
          kicker="Production C++ at Sygic / Eurowag and BSH, plus open-source libraries on GitHub."
        />
        <div className="grid lg:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <Spotlight key={p.name} className="rounded-[22px] h-full">
              <GlassCard className="p-6 md:p-7 reveal h-full flex flex-col" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-[13px] text-[color:var(--ink-dim)] flex items-center gap-2">
                      <Icon name={p.url ? 'Github' : 'Box'} size={13} />
                      {p.name}
                    </div>
                    <div className="mt-2 text-[18px] font-semibold tracking-tight">{p.tagline}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-mono text-xl">{p.metric.value}</div>
                    <div className="eyebrow">{p.metric.label}</div>
                  </div>
                </div>
                <p className="mt-4 text-[14px] text-[color:var(--ink-dim)] leading-relaxed flex-1">{p.description}</p>
                <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[color:var(--ink-dim)] hover:text-white flex items-center gap-1.5 transition">
                      <Icon name="Github" size={13} /> View repo <Icon name="ArrowUpRight" size={13} />
                    </a>
                  ) : (
                    <span className="text-[12px] font-mono text-[color:var(--ink-muted)]">
                      internal — {p.name.startsWith('BSH') ? 'BSH' : p.name.startsWith('Sygic') ? 'Sygic / Eurowag' : 'company project'}
                    </span>
                  )}
                </div>
              </GlassCard>
            </Spotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
