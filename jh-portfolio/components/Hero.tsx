"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 clamp(3rem, 8vw, 10rem)",
        width: "100%",
      }}
    >
      {/* Red top rule */}
      <div
        style={{
          width: "48px",
          height: "3px",
          backgroundColor: "var(--accent)",
          marginBottom: "1.5rem",
        }}
      />

      {/* Section tag */}
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: "13px",
          fontWeight: 400,
          letterSpacing: "1px",
          color: "var(--text-dim)",
          marginBottom: "2rem",
          textTransform: "uppercase" as const,
        }}
      >
        Product Manager
      </p>

      {/* Name — large editorial */}
      <h1
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(56px, 9vw, 96px)",
          fontWeight: 400,
          lineHeight: 1.02,
          color: "var(--text)",
          margin: "0 0 2.5rem 0",
          letterSpacing: "-0.5px",
        }}
      >
        John Huang
      </h1>

      {/* Tagline */}
      <p
        style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(20px, 2.5vw, 26px)",
          color: "var(--text-mid)",
          maxWidth: "680px",
          lineHeight: 1.65,
          marginBottom: "3.5rem",
        }}
      >
        I build subscription products people choose to pay for — and stay with.
        Currently looking for my next opportunity to turn reader value into
        revenue.
      </p>

      {/* CTAs */}
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
        <a
          href="#contact"
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
          Get in Touch
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
    </section>
  );
}
