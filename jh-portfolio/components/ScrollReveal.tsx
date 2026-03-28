"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({
  children,
  stagger = false,
  direction,
  className = "",
}: {
  children: React.ReactNode;
  stagger?: boolean;
  direction?: "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  let animClass = "reveal";
  if (stagger) animClass = "reveal-stagger";
  else if (direction === "left") animClass = "reveal-left";
  else if (direction === "right") animClass = "reveal-right";

  return (
    <div ref={ref} className={`${animClass} ${className}`}>
      {children}
    </div>
  );
}
