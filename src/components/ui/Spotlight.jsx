import { useSpotlight } from '../../hooks/useSpotlight';

export function Spotlight({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useSpotlight();
  return (
    <Tag ref={ref} className={`spotlight ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
