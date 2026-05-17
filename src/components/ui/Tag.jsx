export function Tag({ children }) {
  return (
    <span className="text-[11px] font-mono tracking-wide px-2 py-1 rounded-md border border-white/10 bg-white/[0.03] text-[color:var(--ink-dim)]">
      {children}
    </span>
  );
}
