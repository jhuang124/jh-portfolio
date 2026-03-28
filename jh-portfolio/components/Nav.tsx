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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.href.slice(1));
        if (el && el.getBoundingClientRect().top < 120) {
          current = l.href.slice(1);
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <a href="#hero" className="nav-brand">John Huang</a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${active === link.href.slice(1) ? "nav-link--active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
          </a>
        ))}
      </div>
    </>
  );
}
