import { GlassCard } from '../ui/GlassCard';
import { SectionHeader } from '../ui/SectionHeader';
import { Icon } from '../ui/Icon';

export function About() {
  const facts = [
    { value: '4+',     label: 'years in C++',       icon: 'Cpu' },
    { value: '30+',    label: 'certifications',     icon: 'BadgeCheck' },
    { value: 'C++23',  label: 'current std',        icon: 'Code2' },
    { value: '3',      label: 'open-source repos',  icon: 'Github' },
    { value: '3',      label: 'universities',       icon: 'GraduationCap' },
    { value: '2',      label: 'production teams',   icon: 'Building2' },
  ];
  return (
    <section id="about" className="relative py-14 sm:py-20 md:py-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="01 — About"
          title="A C++ engineer who treats production like the product."
        />
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          <div className="lg:col-span-7 flex flex-col gap-5 reveal">
            <p className="text-[15px] md:text-[17px] leading-relaxed text-[color:var(--ink)]/95">
              Modern C++ where it matters, mentorship where it helps, and a quiet preference for code that survives Monday morning. I work at the meeting point of templates, concurrency, and clean architecture — the unglamorous engineering that makes the rest of the product possible.
            </p>
            <p className="text-[14px] md:text-[15px] leading-relaxed text-[color:var(--ink-dim)]">
              Four years across navigation engines, embedded platforms, and partner-facing SDKs. Self-taught senior path backed by a long credential trail: 30+ certifications, three universities, three open-source C++ libraries on GitHub.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="chip chip-mono">C++23 · STL · Boost</span>
              <span className="chip chip-mono">CMake · CLion · Git</span>
              <span className="chip chip-mono">Google Test · sanitizers</span>
              <span className="chip chip-mono">English B2 · Slovak B2</span>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {facts.map((f, i) => (
              <GlassCard key={f.label} className="p-4 reveal flex flex-col gap-2" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 grid place-items-center">
                  <Icon name={f.icon} size={14} />
                </div>
                <div className="text-xl md:text-2xl font-mono tracking-tight mt-1">{f.value}</div>
                <div className="text-[10.5px] tracking-wider uppercase text-[color:var(--ink-muted)] font-mono leading-tight">{f.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
