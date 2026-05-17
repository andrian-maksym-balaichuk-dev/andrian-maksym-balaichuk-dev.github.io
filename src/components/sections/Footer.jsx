import { PROFILE } from '../../data/resume';

export function Footer() {
  return (
    <footer className="relative pb-14 pt-6">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-[color:var(--ink-muted)] font-mono">
        <div>© {new Date().getFullYear()} {PROFILE.name} — built with care.</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.82_0.14_150)] shadow-[0_0_8px_oklch(0.82_0.14_150)]" />
          <span>Currently online · UTC+1</span>
        </div>
      </div>
    </footer>
  );
}
