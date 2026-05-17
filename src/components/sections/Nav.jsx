import { useState, useRef, useCallback, useEffect } from 'react';
import { PROFILE } from '../../data/resume';
import { Icon } from '../ui/Icon';

function LiquidPill({ pill, stretch, origin }) {
  const [pulse, setPulse] = useState(false);
  const prevX = useRef(pill.x);
  useEffect(() => {
    if (pill.visible && pill.x !== prevX.current) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 280);
      prevX.current = pill.x;
      return () => clearTimeout(t);
    }
    prevX.current = pill.x;
  }, [pill.x, pill.visible]);

  const sx = pulse ? stretch : 1;
  return (
    <div
      className={'liquid-pill' + (pill.visible ? ' is-visible' : '')}
      style={{
        width:           pill.w + 'px',
        transform:       `translate(${pill.x}px, -50%) scaleX(${sx})`,
        transformOrigin: origin,
      }}
    />
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const links = [
    ['About',      '#about',          'User'],
    ['Experience', '#experience',     'Briefcase'],
    ['Skills',     '#skills',         'Layers'],
    ['C++',        '#cpp',            'Cpu'],
    ['Projects',   '#projects',       'FolderGit2'],
    ['Education',  '#education',      'GraduationCap'],
    ['Certs',      '#certifications', 'BadgeCheck'],
    ['Contact',    '#contact',        'Mail'],
  ];

  const linkRefs = useRef({});
  const navListRef = useRef(null);
  const prevXRef = useRef(0);
  const wasVisibleRef = useRef(false);
  const [pill, setPill] = useState({ x: 0, w: 0, visible: false });
  const [stretch, setStretch] = useState(1);
  const [origin, setOrigin] = useState('center');
  const [blend, setBlend] = useState(null);

  const measurePill = useCallback(() => {
    if (!active || !linkRefs.current[active] || !navListRef.current) {
      setPill(p => ({ ...p, visible: false }));
      wasVisibleRef.current = false;
      return;
    }
    const parent = navListRef.current;
    const parentRect = parent.getBoundingClientRect();
    const elA = linkRefs.current[active];
    const rectA = elA.getBoundingClientRect();
    let x = rectA.left - parentRect.left;
    let w = rectA.width;

    if (blend && blend.a === active && linkRefs.current[blend.b]) {
      const elB = linkRefs.current[blend.b];
      const rectB = elB.getBoundingClientRect();
      const xB = rectB.left - parentRect.left;
      const wB = rectB.width;
      const t = Math.min(0.5, blend.t);
      const xL = Math.min(x, xB);
      const xR = Math.max(x + w, xB + wB);
      x = x + (xB - x) * t * 0.7;
      w = w + (xR - xL - w) * t * 0.6;
    }

    const dx = wasVisibleRef.current ? x - prevXRef.current : 0;
    const dist = Math.abs(dx);
    setOrigin(dx > 0 ? 'left center' : dx < 0 ? 'right center' : 'center');
    setStretch(dist > 0 ? Math.min(1.05 + dist / 320, 1.30) : 1);
    prevXRef.current = x;
    wasVisibleRef.current = true;
    setPill({ x, w, visible: true });
  }, [active, blend]);

  useEffect(() => { measurePill(); }, [measurePill]);
  useEffect(() => {
    window.addEventListener('resize', measurePill);
    return () => window.removeEventListener('resize', measurePill);
  }, [measurePill]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const ids = links.map(([, href]) => href.slice(1));
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!targets.length) return;
    const visibility = new Map();

    const recompute = () => {
      const sorted = [...visibility.entries()].sort((a, b) => b[1] - a[1]);
      const [topId, topR] = sorted[0] || ['', 0];
      const [secondId, secondR] = sorted[1] || ['', 0];
      if (!topR) { setActive(''); setBlend(null); return; }
      setActive(topId);
      if (secondR > 0.15 && (topR - secondR) < 0.5) {
        const total = topR + secondR;
        setBlend({ a: topId, b: secondId, t: secondR / total });
      } else {
        setBlend(null);
      }
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => visibility.set(e.target.id, e.intersectionRatio));
      recompute();
    }, { rootMargin: '-25% 0px -45% 0px', threshold: Array.from({length: 21}, (_, i) => i / 20) });
    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-40 flex justify-center px-3">
      <nav className="nav-pill glass-strong rounded-full px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-1 md:gap-2 w-full max-w-[920px]">
        <a href="#top" onClick={(e) => {
          if (window.innerWidth < 1024) {
            e.preventDefault();
            setOpen(o => !o);
          }
        }} className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-full hover:bg-white/5 transition">
          <span className="w-7 h-7 rounded-lg avatar-glow grid place-items-center text-[11px] font-mono font-medium border border-white/10">AMB</span>
          <span className="text-sm font-medium tracking-tight hidden sm:block">{PROFILE.shortName}</span>
        </a>
        <span className="hidden lg:block w-px h-5 bg-white/10 mx-1" />
        <div ref={navListRef} className="relative hidden lg:flex items-center gap-1 text-sm">
          <LiquidPill pill={pill} stretch={stretch} origin={origin} />
          {links.map(([label, href]) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <a key={href} href={href}
                 ref={(el) => { if (el) linkRefs.current[id] = el; }}
                 className={`relative z-10 px-3 py-1.5 rounded-full transition ${isActive ? 'text-white' : 'text-[color:var(--ink-dim)] hover:text-white'}`}>
                {label}
              </a>
            );
          })}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <a href="#contact" className="hidden lg:inline-flex btn btn-glass !py-1.5 !px-3 !text-[13px]">
            <Icon name="ArrowUpRight" size={14} /> Get in touch
          </a>
          <button onClick={() => setOpen(o => !o)} aria-label="Menu"
                  className="lg:hidden w-9 h-9 rounded-full grid place-items-center hover:bg-white/10 transition">
            <Icon name={open ? 'X' : 'Menu'} size={18} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 ios-sheet-root" onClick={() => setOpen(false)}>
          <div className="ios-sheet-backdrop" />
          <div className="ios-sheet" onClick={e => e.stopPropagation()}>
            <div className="mx-3 mt-3 glass-strong rounded-[28px] p-2 flex flex-col"
                 style={{ marginTop: 'max(12px, env(safe-area-inset-top))' }}>
              <a href="#top" onClick={() => setOpen(false)}
                 className="flex items-center justify-between px-3 py-2 mb-0.5 rounded-full hover:bg-white/[0.04] transition">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg avatar-glow grid place-items-center text-[10px] font-mono font-medium border border-white/10">AMB</span>
                  <div>
                    <div className="text-[13px] font-medium leading-tight">{PROFILE.shortName}</div>
                    <div className="text-[10.5px] font-mono text-[color:var(--ink-muted)]">{PROFILE.role}</div>
                  </div>
                </div>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(false); }} aria-label="Close"
                        className="w-9 h-9 rounded-full bg-white/[0.08] border border-white/10 grid place-items-center hover:bg-white/15 transition">
                  <Icon name="X" size={14} />
                </button>
              </a>
              <div className="h-px bg-white/8 mx-2 my-1" />
              <div className="grid grid-cols-2 gap-2 py-1">
                {links.map(([label, href]) => (
                  <a key={href} href={href} onClick={() => setOpen(false)}
                     className="px-4 py-3 rounded-full text-center text-[14px] font-medium tracking-tight hover:bg-white/[0.07] transition border border-white/[0.06] hover:border-white/[0.14] text-[color:var(--ink-dim)] hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
              <div className="h-px bg-white/8 mx-2 my-1" />
              <div className="flex items-center justify-between px-3 py-2">
                <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-[12px] font-mono text-[color:var(--ink-dim)] hover:text-white">
                  <Icon name="Github" size={13} /> GitHub
                </a>
                <a href={PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-[12px] font-mono text-[color:var(--ink-dim)] hover:text-white">
                  <Icon name="Linkedin" size={13} /> LinkedIn
                </a>
                <a href={`mailto:${PROFILE.email}`}
                   className="flex items-center gap-2 text-[12px] font-mono text-[color:var(--ink-dim)] hover:text-white">
                  <Icon name="Mail" size={13} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
