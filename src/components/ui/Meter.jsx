import { useRef, useEffect } from 'react';

export function Meter({ value }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.width = '0%';
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => {
          el.style.transition = 'width 1.2s cubic-bezier(.2,.7,.2,1)';
          el.style.width = value + '%';
        });
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <div className="meter"><span ref={ref} /></div>;
}
