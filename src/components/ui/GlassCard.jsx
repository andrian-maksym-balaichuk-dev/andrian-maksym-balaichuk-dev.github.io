export function GlassCard({ className = '', strong = false, children, hover = true, style }) {
  return (
    <div
      className={`relative rounded-[22px] ${strong ? 'glass-strong' : 'glass'} ${hover ? 'glass-hover' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
