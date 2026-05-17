import { useState, useEffect } from 'react';

export function useTypewriter(phrases, { typeMs = 55, deleteMs = 28, holdMs = 1400 } = {}) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = phrases[i % phrases.length];
    let t;
    if (!del && text === cur) { t = setTimeout(() => setDel(true), holdMs); }
    else if (del && text === '') { setDel(false); setI(i + 1); }
    else if (del) { t = setTimeout(() => setText(cur.slice(0, text.length - 1)), deleteMs); }
    else { t = setTimeout(() => setText(cur.slice(0, text.length + 1)), typeMs); }
    return () => clearTimeout(t);
  }, [text, del, i, phrases, typeMs, deleteMs, holdMs]);

  return text;
}
