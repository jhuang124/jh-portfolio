"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowDown } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "var(--space-10) var(--space-7)",
        background: "var(--bg-contact)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "var(--space-8)",
          alignItems: "center",
        }}
      >
        {/* Left — copy */}
        <ScrollReveal direction="left">
          <div>
            <div className="section-rule" />
            <p className="section-label">Say hello</p>

            <h2
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(32px, 5vw, 48px)",
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
                fontFamily: "var(--serif)",
                fontSize: "var(--text-base)",
                color: "var(--text-mid)",
                lineHeight: "var(--leading-normal)",
                maxWidth: 480,
                margin: "0 0 var(--space-3) 0",
              }}
            >
              I&apos;m exploring PM roles at companies where product quality
              and business model are the same conversation.
            </p>

            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "11px",
                color: "var(--text-dim)",
                letterSpacing: "0.5px",
              }}
            >
              Based in New York
            </p>
          </div>
        </ScrollReveal>

        {/* Right — CTAs */}
        <ScrollReveal direction="right">
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)", alignItems: "flex-start", maxWidth: 280 }}>
            <a href="mailto:johnhuang@example.com" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/john-huang-95909a156/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "100%", textAlign: "center" }}
            >
              LinkedIn
            </a>
            <a
              href="#"
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
                marginTop: "var(--space-2)",
                transition: "color 0.2s ease",
                alignSelf: "center",
              }}
            >
              Download resume (PDF) <ArrowDown size={14} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
