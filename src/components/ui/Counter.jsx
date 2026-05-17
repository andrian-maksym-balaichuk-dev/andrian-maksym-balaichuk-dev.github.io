import { useState, useRef, useEffect } from 'react';

export function Counter({ to, prefix = '', suffix = '', duration = 1500, decimals = 0 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(to * eased);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      io.disconnect();
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);
  const formatted = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref} className="font-mono">{prefix}{formatted}{suffix}</span>;
}
