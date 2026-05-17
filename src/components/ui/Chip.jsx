import { Icon } from './Icon';

export function Chip({ children, icon }) {
  return (
    <span className="chip">
      {icon && <Icon name={icon} size={12} />}
      {children}
    </span>
  );
}
