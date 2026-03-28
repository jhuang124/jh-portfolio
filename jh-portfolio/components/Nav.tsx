"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "ABOUT", href: "#about" },
  { label: "TIMELINE", href: "#timeline" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backgroundColor: scrolled ? "rgba(245,241,235,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease",
        padding: "0 3rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: "var(--serif)",
          fontStyle: "italic",
          fontSize: "24px",
          fontWeight: 400,
          letterSpacing: "0.3px",
          color: "var(--text)",
          textDecoration: "none",
        }}
      >
        John Huang
      </a>

      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((l) => {
          const id = l.href.replace("#", "");
          return (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.8px",
                color: active === id ? "var(--accent)" : "var(--text-dim)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (active !== id) e.currentTarget.style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                if (active !== id)
                  e.currentTarget.style.color = "var(--text-dim)";
              }}
            >
              {l.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
