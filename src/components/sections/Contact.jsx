import { useState } from 'react';
import { PROFILE } from '../../data/resume';
import { GlassCard } from '../ui/GlassCard';
import { Icon } from '../ui/Icon';

export function Contact() {
  const email = PROFILE.email;
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <section id="contact" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <GlassCard strong className="p-6 sm:p-8 md:p-12 overflow-hidden reveal">
          <div className="sheen" />
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="chip-dot" style={{ background: 'oklch(0.82 0.14 150)', boxShadow: '0 0 10px oklch(0.82 0.14 150)' }} />
                <span className="eyebrow">09 — Contact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05]">
                Let's build something that holds up<br /><span className="text-[color:var(--ink-dim)]">at three in the morning.</span>
              </h2>
              <p className="text-[15px] text-[color:var(--ink-dim)] max-w-xl">
                Best way to reach me is email. I'm currently weighing staff and principal opportunities — happy to chat about consulting too.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a href={`mailto:${email}`} className="btn btn-primary">
                  <Icon name="Mail" size={16} /> {email}
                </a>
                <button onClick={copyEmail} className="btn btn-glass">
                  <Icon name={copied ? 'Check' : 'Copy'} size={16} /> {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              {[
                { icon: 'Github', label: 'GitHub', value: PROFILE.github, href: PROFILE.githubUrl },
                { icon: 'Linkedin', label: 'LinkedIn', value: PROFILE.linkedin, href: PROFILE.linkedinUrl },
                { icon: 'Phone', label: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
                { icon: 'MapPin', label: 'Based in', value: PROFILE.location, href: null },
              ].map(r => {
                const Tag = r.href ? 'a' : 'div';
                const props = r.href ? { href: r.href, target: '_blank', rel: 'noopener noreferrer' } : {};
                return (
                  <Tag key={r.label} {...props} className="row glass rounded-2xl px-5 py-4 flex items-center gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center">
                      <Icon name={r.icon} size={15} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="eyebrow">{r.label}</div>
                      <div className="text-[13.5px] font-mono truncate">{r.value}</div>
                    </div>
                    {r.href && <Icon name="ArrowUpRight" size={14} className="text-[color:var(--ink-muted)]" />}
                  </Tag>
                );
              })}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
