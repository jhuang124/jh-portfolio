"use client";

import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "var(--bg-contact)",
        padding: "140px 3rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Top gradient transition — smooth entry into warmer space */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(180deg, transparent 0%, var(--bg-contact) 100%)",
          pointerEvents: "none",
        }}
      />

      <ScrollReveal>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontSize: "clamp(30px, 5vw, 48px)",
            fontWeight: 400,
            color: "var(--text)",
            margin: "0 0 1.5rem 0",
            letterSpacing: "-0.3px",
          }}
        >
          Let&apos;s build something worth paying for
        </h2>

        <p
          style={{
            fontFamily: "var(--serif)",
            fontSize: "17px",
            color: "var(--text-mid)",
            maxWidth: "480px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
          }}
        >
          I&apos;m looking for my next PM role. Let&apos;s talk.
        </p>

        {/* Primary CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "2.5rem",
          }}
        >
          <a
            href="mailto:huangjohn1997@gmail.com"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              color: "#FFFFFF",
              backgroundColor: "var(--accent)",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background-color 0.2s",
              textTransform: "uppercase" as const,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent-hover)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--accent)")
            }
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/john-huang-95909a156/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.8px",
              color: "var(--text)",
              border: "1px solid var(--border)",
              backgroundColor: "transparent",
              padding: "16px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "border-color 0.2s",
              textTransform: "uppercase" as const,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--text)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            LinkedIn
          </a>
        </div>

        {/* Secondary — resume download */}
        <a
          href="/resume.pdf"
          download
          style={{
            fontFamily: "var(--sans)",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "var(--text-dim)",
            textDecoration: "none",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "3px",
            transition: "color 0.2s, border-color 0.2s",
            textTransform: "uppercase" as const,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-dim)";
            e.currentTarget.style.borderColor = "var(--border)";
          }}
        >
          Download Resume (PDF) &darr;
        </a>
      </ScrollReveal>
    </section>
  );
}
