"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const scrollContainer = document.querySelector(".main-scroll");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const sectionElements = sections
        .map((s) => document.getElementById(s.id))
        .filter(Boolean) as HTMLElement[];

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const rect = sectionElements[i].getBoundingClientRect();
        // Check relative to the scroll container, not the viewport
        if (rect.top <= 200) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="sidebar" data-section={activeSection}>
      {/* Name + Role */}
      <div>
        <h1 className="sidebar-name">John Huang</h1>
        <p className="sidebar-role">Product Manager</p>
      </div>

      {/* Status indicator — C5 */}
      <div className="sidebar-status">
        <span className="sidebar-status-dot" />
        Open to PM roles
      </div>

      {/* Bio */}
      <p className="sidebar-bio">
        I&apos;ve spent the last four years at The Atlantic figuring out how to get
        people to subscribe and stay subscribed. Before that I ran my family&apos;s
        store for a decade and studied econ and engineering at Columbia.
      </p>

      {/* Section nav — C1 */}
      <nav className="sidebar-nav">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`sidebar-nav-link ${activeSection === s.id ? "sidebar-nav-link--active" : ""}`}
          >
            <span className="sidebar-nav-dot" />
            {s.label}
          </button>
        ))}
      </nav>

      {/* External links */}
      <div className="sidebar-links">
        <a href="mailto:huangjohn1997@gmail.com" className="sidebar-link">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/john-huang-95909a156/"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          LinkedIn
        </a>
        <a
          href="/jh-portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link"
        >
          Resume (PDF)
        </a>
      </div>
    </aside>
  );
}
