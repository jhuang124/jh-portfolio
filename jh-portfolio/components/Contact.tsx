"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowDown } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ maxWidth: 720, marginBottom: "var(--space-7)" }}
    >
      <ScrollReveal>
        <div className="section-rule" />
        <p className="section-label">Say hello</p>

        <h2
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 400,
            color: "var(--text)",
            lineHeight: "var(--leading-tight)",
            margin: "0 0 var(--space-5) 0",
          }}
        >
          Let&apos;s build something worth paying for
        </h2>

        <p
          style={{
            fontSize: "var(--text-base)",
            color: "var(--text-mid)",
            lineHeight: "var(--leading-normal)",
            maxWidth: 520,
            margin: "0 0 var(--space-6) 0",
          }}
        >
          I&apos;m exploring PM roles at companies where product quality
          and business model are the same conversation.
        </p>

        <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", alignItems: "center" }}>
          <a href="mailto:huangjohn1997@gmail.com" className="btn-primary">
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/john-huang-95909a156/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            LinkedIn
          </a>
          <a
            href="/jh-portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--mono)",
              fontSize: "var(--text-xs)",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              textDecoration: "none",
            }}
          >
            Resume (PDF) <ArrowDown size={14} />
          </a>
        </div>

        <p
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            color: "var(--text-dim)",
            letterSpacing: "0.5px",
            marginTop: "var(--space-5)",
          }}
        >
          Based in New York
        </p>
      </ScrollReveal>
    </section>
  );
}
