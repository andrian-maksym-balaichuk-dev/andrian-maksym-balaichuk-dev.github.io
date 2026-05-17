import { useMemo } from 'react';
import { PROFILE } from '../../data/resume';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Icon } from '../ui/Icon';
import { GlassCard } from '../ui/GlassCard';
import { Chip } from '../ui/Chip';
import { Counter } from '../ui/Counter';
import { Spotlight } from '../ui/Spotlight';

export function Hero() {
  const nameParts = PROFILE.name.split(/\s+/);
  const firstName = nameParts.slice(0, -1).join(' ') || nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : '';

  const phrases = useMemo(() => [
    'navigation engines that route in milliseconds.',
    'modern C++20 / 23 in real production code.',
    'backend APIs built for the long haul.',
    'concurrent systems that don\'t lie under load.',
    'algorithms tuned for the workloads they actually see.',
  ], []);
  const typed = useTypewriter(phrases, { typeMs: 38, deleteMs: 20, holdMs: 1600 });

  return (
    <section id="top" className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20 md:pb-28">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left */}
          <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-7 reveal">
            <div className="flex flex-wrap gap-2">
              <span className="chip chip-mono">
                <span className="chip-dot pulse-dot" style={{ background: 'oklch(0.82 0.14 150)', boxShadow: '0 0 10px oklch(0.82 0.14 150)' }} />
                {PROFILE.available}
              </span>
              <Chip icon="MapPin">{PROFILE.location}</Chip>
              <span className="chip chip-mono"><Icon name="Cpu" size={11} /> {PROFILE.role}</span>
            </div>

            <h1 className="font-semibold tracking-[-0.025em] leading-[0.96]">
              <span className="block text-[14px] font-mono tracking-[0.18em] uppercase text-[color:var(--ink-muted)] mb-3">
                <span className="text-white">{'>'}_</span> hello, i'm
              </span>
              <span className="block text-[34px] xs:text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[78px]">
                {firstName}
              </span>
              <span className="block text-[34px] xs:text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[78px]" style={{
                background: 'linear-gradient(90deg, oklch(0.86 0.10 220), oklch(0.80 0.13 280), oklch(0.84 0.12 340))',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                filter: 'drop-shadow(0 0 24px oklch(0.78 0.13 280 / 0.25))',
              }}>
                {lastName || ' '}
              </span>
            </h1>

            <div className="font-mono text-[14px] sm:text-[15px] md:text-[17px] text-[color:var(--ink-dim)] flex items-start gap-3 min-h-[4.6em] sm:min-h-[3.2em]">
              <span className="text-[color:var(--ink-muted)] shrink-0 pt-[2px]">$</span>
              <span className="leading-[1.55]">
                <span className="text-[color:var(--ink-muted)]">building </span>
                <span style={{
                  background: 'linear-gradient(90deg, oklch(0.86 0.10 220), oklch(0.80 0.13 280))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>{typed}</span>
                <span className="caret" style={{ color: 'oklch(0.84 0.12 280)' }} />
              </span>
            </div>

            <p className="text-base md:text-lg text-[color:var(--ink-dim)] max-w-xl leading-relaxed">
              {PROFILE.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#experience" className="btn btn-primary">
                <Icon name="LineChart" size={16} /> View experience
              </a>
              <a href="/My Resume.pdf" download className="btn btn-glass">
                <Icon name="Download" size={16} /> Download CV
              </a>
              <a href="#contact" className="btn btn-glass">
                <Icon name="Mail" size={16} /> Contact me
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 max-w-xl">
              {PROFILE.hero_chips.map((c, i) => (
                <span key={c} className="chip chip-mono" style={{ animation: `floatY ${4 + (i % 3)}s ease-in-out ${i * 0.15}s infinite alternate` }}>
                  <span className="chip-dot" style={{ background: `oklch(0.78 0.12 ${200 + i * 22})`, boxShadow: `0 0 10px oklch(0.78 0.12 ${200 + i * 22})` }} />
                  {c}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 max-w-lg">
              {[
                { to: PROFILE.yearsExp, suffix: '+', label: 'years in C++' },
                { to: 23, label: 'C++ std mastered', prefix: 'C++' },
                { to: 3, label: 'production teams' },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl px-4 py-3">
                  <div className="text-xl font-mono"><Counter to={s.to} prefix={s.prefix || ''} suffix={s.suffix || ''} /></div>
                  <div className="text-[10.5px] tracking-wider uppercase text-[color:var(--ink-muted)] mt-1 font-mono">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden md:flex md:col-span-4 lg:col-span-5 reveal flex-col gap-4 max-w-[260px] lg:max-w-[420px] w-full">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] pointer-events-none breath-glow" style={{
                background: 'radial-gradient(60% 50% at 30% 30%, oklch(0.72 0.18 280 / 0.45), transparent 70%), radial-gradient(50% 50% at 80% 80%, oklch(0.72 0.16 200 / 0.35), transparent 70%)',
                filter: 'blur(40px)', zIndex: 0,
              }} />
              <div className="photo-frame rounded-[26px] p-3 relative" style={{ zIndex: 1 }}>
                <div className="sheen" />
                <div className="relative rounded-[22px] overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
                  <img
                    src="/photo.png"
                    alt={PROFILE.name}
                    loading="eager"
                    decoding="async"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }} />
                  <div className="absolute left-4 bottom-4 right-4 flex items-end justify-end gap-3 pointer-events-none">
                    <div className="chip chip-mono" style={{ background: 'rgba(0,0,0,0.4)' }}>
                      <span className="chip-dot pulse-dot" style={{ background: 'oklch(0.82 0.14 150)', boxShadow: '0 0 10px oklch(0.82 0.14 150)' }} />
                      online
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Spotlight className="glass-strong rounded-[22px] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                <span className="ml-2 text-[11px] font-mono text-[color:var(--ink-muted)]">~/now.cpp</span>
              </div>
              <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-[12.5px] leading-[1.65] overflow-x-auto">
                <div><span className="tk-com">{'// what I\'m shipping right now'}</span></div>
                <div>
                  <span className="tk-mac">{'[['}</span><span className="tk-key">nodiscard</span><span className="tk-mac">{']]'}</span>{' '}
                  <span className="tk-key">constexpr</span> <span className="tk-type">auto</span>{' '}
                  <span className="tk-fn">building</span><span className="tk-pun">()</span>{' '}
                  <span className="tk-key">noexcept</span> <span className="tk-pun">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="tk-key">return</span>{' '}
                  <span className="tk-type">std::array</span><span className="tk-pun">{'{'}</span>
                </div>
                <div className="pl-8"><span className="tk-str">"Routing &amp; navigation engine"</span><span className="tk-pun">,</span></div>
                <div className="pl-8"><span className="tk-str">"C++ SDK for partner apps"</span><span className="tk-pun">,</span></div>
                <div className="pl-8"><span className="tk-str">"Backend APIs &amp; pipelines"</span><span className="tk-pun">,</span></div>
                <div className="pl-4"><span className="tk-pun">{'};'}</span></div>
                <div><span className="tk-pun">{'}'}</span></div>
                <div className="mt-3"><span className="tk-com">{'// daily stack'}</span></div>
                <div>
                  <span className="tk-key">constexpr</span> <span className="tk-type">auto</span>{' '}
                  <span className="tk-fn">tools</span> <span className="tk-op">=</span>{' '}
                  <span className="tk-type">std::array</span><span className="tk-pun">{'{'}</span>{' '}
                  <span className="tk-str">"C++23"</span><span className="tk-pun">,</span>{' '}
                  <span className="tk-str">"STL"</span><span className="tk-pun">,</span>{' '}
                  <span className="tk-str">"Boost"</span><span className="tk-pun">,</span>{' '}
                  <span className="tk-str">"Linux"</span>{' '}
                  <span className="tk-pun">{'};'}</span>
                </div>
              </div>
            </Spotlight>

            <div className="grid grid-cols-2 gap-3">
              <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                <GlassCard className="p-4 flex flex-col gap-3 float-slow">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center"><Icon name="Github" size={16} /></div>
                    <Icon name="ArrowUpRight" size={13} className="text-[color:var(--ink-muted)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="eyebrow">GitHub</div>
                    <div className="text-[12px] font-mono mt-1 break-all leading-tight">@andrian-maksym-balaichuk-dev</div>
                  </div>
                </GlassCard>
              </a>
              <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="block">
                <GlassCard className="p-4 flex flex-col gap-3 float-slower">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 grid place-items-center"><Icon name="Linkedin" size={16} /></div>
                    <Icon name="ArrowUpRight" size={13} className="text-[color:var(--ink-muted)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="eyebrow">LinkedIn</div>
                    <div className="text-[12px] font-mono mt-1 break-all leading-tight">/andrian-maksym-balaichuk</div>
                  </div>
                </GlassCard>
              </a>
            </div>
          </div>
        </div>

        {/* Tech ticker */}
        <div className="mt-16 reveal">
          <div className="ticker py-3">
            <div className="ticker-track text-[12px] font-mono text-[color:var(--ink-muted)]">
              {[...Array(2)].flatMap((_, k) => [
                'C++23', 'C++20', 'Templates', 'Concepts', 'STL', 'Boost.Asio',
                'Boost.Spirit', 'Concurrency', 'Atomics', 'Linux', 'Kubernetes',
                'Helm', 'Azure', 'Python', 'Git', 'CMake', 'Google Test',
              ].map((t, i) => (
                <span key={`${k}-${i}`} className="inline-flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{t}</span>
                </span>
              )))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
