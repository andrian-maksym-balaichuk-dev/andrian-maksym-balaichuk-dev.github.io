import { useState } from 'react';
import { CERTIFICATIONS, TOP_CERTS, PROFILE } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

const issuerColor = (issuer) => ({
  'EUROWAG':       'oklch(0.78 0.13 25)',
  'LinkedIn':      'oklch(0.74 0.10 240)',
  'Codio':         'oklch(0.78 0.12 280)',
  'Packt':         'oklch(0.78 0.13 30)',
  'Microsoft':     'oklch(0.78 0.12 200)',
  'GitHub':        'oklch(0.85 0.04 280)',
  'Cisco':         'oklch(0.78 0.12 200)',
  'UC Santa Cruz': 'oklch(0.78 0.12 40)',
})[issuer] || 'oklch(0.80 0.06 250)';

export function Certifications() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader eyebrow="08 — Certifications" title="What I've studied to get here." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {TOP_CERTS.map((c, i) => (
            <GlassCard key={c.name} className="p-5 md:p-6 reveal h-full flex flex-col gap-3" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl border border-white/12 grid place-items-center shrink-0"
                     style={{ background: `linear-gradient(160deg, ${issuerColor(c.issuer)}, oklch(0.30 0.04 260))` }}>
                  <Icon name="BadgeCheck" size={15} />
                </div>
                <div className="text-[11px] font-mono tracking-wider uppercase text-[color:var(--ink-muted)]">{c.issuer}</div>
              </div>
              <div className="text-[14.5px] font-medium leading-snug mt-auto">{c.name}</div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[13px] text-[color:var(--ink-dim)] font-mono">
            {CERTIFICATIONS.length} total · {TOP_CERTS.length} above
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button onClick={() => setShowAll(v => !v)} className="btn btn-glass !py-2 !px-4 !text-[13px]">
              <Icon name={showAll ? 'ChevronUp' : 'ChevronDown'} size={14} />
              {showAll ? 'Hide full list' : `Show all ${CERTIFICATIONS.length}`}
            </button>
            <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="btn btn-glass !py-2 !px-4 !text-[13px]">
              <Icon name="Linkedin" size={14} /> View on LinkedIn
            </a>
          </div>
        </div>

        {showAll && (
          <div className="mt-6 reveal in">
            <GlassCard className="p-5 md:p-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {CERTIFICATIONS.map(c => (
                  <div key={c.name + c.issuer} className="row glass rounded-xl px-3.5 py-3 flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: issuerColor(c.issuer), boxShadow: `0 0 8px ${issuerColor(c.issuer)}` }} />
                    <div className="min-w-0 flex-1">
                      <div className="text-[12.5px] leading-tight truncate">{c.name}</div>
                      <div className="font-mono text-[10.5px] text-[color:var(--ink-muted)] mt-1">{c.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
}
