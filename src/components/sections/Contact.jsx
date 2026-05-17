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
        <GlassCard strong className="p-5 sm:p-8 md:p-12 overflow-hidden reveal">
          <div className="sheen" />
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Left — text + buttons */}
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
              <div className="flex items-center gap-3">
                <span className="chip-dot" style={{ background: 'oklch(0.82 0.14 150)', boxShadow: '0 0 10px oklch(0.82 0.14 150)' }} />
                <span className="eyebrow">09 — Contact</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Let's build something that holds up{' '}
                <span className="text-[color:var(--ink-dim)]">at three in the morning.</span>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[color:var(--ink-dim)] max-w-xl">
                Best way to reach me is email. I'm currently weighing staff and principal opportunities — happy to chat about consulting too.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
                <a href={`mailto:${email}`} className="btn btn-primary min-w-0 max-w-full">
                  <Icon name="Mail" size={16} className="shrink-0" />
                  <span className="truncate text-[13px] sm:text-[14px]">{email}</span>
                </a>
                <button onClick={copyEmail} className="btn btn-glass shrink-0">
                  <Icon name={copied ? 'Check' : 'Copy'} size={16} />
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Right — contact rows */}
            <div className="lg:col-span-5 flex flex-col gap-2 sm:gap-3 min-w-0">
              {[
                { icon: 'Github',   label: 'GitHub',    value: PROFILE.github,   href: PROFILE.githubUrl },
                { icon: 'Linkedin', label: 'LinkedIn',  value: PROFILE.linkedin, href: PROFILE.linkedinUrl },
                { icon: 'Phone',    label: 'Phone',     value: PROFILE.phone,    href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
                { icon: 'MapPin',   label: 'Based in',  value: PROFILE.location, href: null },
              ].map(r => {
                const Tag = r.href ? 'a' : 'div';
                const props = r.href ? { href: r.href, target: '_blank', rel: 'noopener noreferrer' } : {};
                return (
                  <Tag key={r.label} {...props} className="row glass rounded-2xl px-3 sm:px-5 py-3 sm:py-4 flex items-center gap-3 w-full min-w-0 overflow-hidden">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center shrink-0">
                      <Icon name={r.icon} size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="eyebrow">{r.label}</div>
                      <div className="text-[12px] sm:text-[13.5px] font-mono truncate mt-0.5">{r.value}</div>
                    </div>
                    {r.href && <Icon name="ArrowUpRight" size={13} className="text-[color:var(--ink-muted)] shrink-0" />}
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
