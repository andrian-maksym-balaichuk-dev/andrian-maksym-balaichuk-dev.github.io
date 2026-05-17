import * as icons from 'lucide-react';

export function Icon({ name, size = 16, className = '', strokeWidth = 1.75, ...rest }) {
  const LucideIcon = icons[name] ||
    icons[Object.keys(icons).find(k => k.toLowerCase() === name.toLowerCase()) ?? ''];
  return (
    <span className={`inline-flex items-center justify-center ${className}`} aria-hidden {...rest}>
      {LucideIcon && <LucideIcon size={size} strokeWidth={strokeWidth} />}
    </span>
  );
}
