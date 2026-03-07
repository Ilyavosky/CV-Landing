import { useState, useEffect, useRef } from "react";


export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}


export function useTypewriter(text: string, speed = 55, start = true) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!start) return;
    setDisplay("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplay(text.slice(0, ++i));
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, start]);

  return display;
}
